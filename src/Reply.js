import React from "react";
import * as Backends from "./Backends";

class Reply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      replies: null,
    }
  }

  componentDidMount() {
    Backends.getReplies(this.props.topicId).then(replies =>
      this.setState({ replies: replies })
    );
  }

  render() {
    if (this.state.replies === undefined ||
      this.state.replies === null) return <div>Loading...</div>;
    return this.state.replies.map(reply => {
      return <div dangerouslySetInnerHTML={{__html: reply.content}}/>
    })
  }
}

export default Reply;
