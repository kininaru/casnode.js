import React from "react";
import * as Backends from "./Backends";

class Reply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      replies: null,
      text: "",
    }
  }

  componentDidMount() {
    this.getReplies();
  }

  getReplies() {
    Backends.getReplies(this.props.endpoint, this.props.topicId).then(replies =>
      this.setState({ replies: replies })
    );
  }

  submitNewReply() {
    if (this.state.text.length === 0) {
      alert("Please input something first...");
      return;
    }
    Backends.addReply(
      this.props.endpoint,
      this.props.topicId,
      this.state.text,
      "markdown"
    ).then(res => {
      if (res.status !== "ok") alert(res.msg);
      else this.getReplies();
    });
  }

  renderReplies() {
    return this.state.replies.map(reply => <div dangerouslySetInnerHTML={{__html: reply.content}}/>);
  }

  render() {
    if (this.props.topicId === -1) return null;
    if (this.state.replies === undefined ||
      this.state.replies === null) return <div>Loading...</div>;

    return <div>
      <div>
        <input onChange={e => this.setState( { text: e.target.value })}/>
        <button onClick={() => this.submitNewReply()}>Submit</button>
      </div>
      {this.renderReplies()}
    </div>;
  }
}

export default Reply;
