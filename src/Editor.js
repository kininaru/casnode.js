import React from "react";
import * as Backends from "./Backends";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      replies: [],
    }
  }

  componentDidMount() {
    Backends.getReplies(this.props.topicId).then(replies =>
      this.setState({ replies: replies })
    );
  }

  render() {
    return <input/>
  }
}

export default Editor;
