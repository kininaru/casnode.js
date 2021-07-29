import React from "react";
import * as Backends from "./Backends";
import CasnodeAvatar from "./CasnodeAvatar";
import {Button, Input} from "antd";

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
      else this.setState({
        text: "",
      }, () => this.getReplies());
    });
  }

  renderReplies() {
    return this.state.replies.map(reply => {
      return <div style={{height: 100}}>
        <CasnodeAvatar avatar={reply.avatar} name={reply.author} />
        <div style={{marginLeft: 36, marginTop: 10}} dangerouslySetInnerHTML={{__html: reply.content}}/>
      </div>;
    });
  }

  render() {
    if (this.props.topicId === -1) return null;
    if (this.state.replies === undefined ||
      this.state.replies === null) return <div>Loading...</div>;

    return <div>
      <div>
        <Input
          style={{width: 200}}
          placeholder={`Reply as ${this.props.account.name}`}
          onChange={e => this.setState( { text: e.target.value })}
        />
        <Button
          onClick={() => this.submitNewReply()}
        >
          Submit
        </Button>
      </div>
      {this.renderReplies()}
    </div>;
  }
}

export default Reply;
