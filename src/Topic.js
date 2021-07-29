import React from "react";
import * as Backends from "./Backends";

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: null,
    }
  }

  componentDidMount() {
    Backends.getTopic(this.props.endpoint, this.props.topicId).then(topic =>
      this.setState({topic: topic})
    );
  }

  render() {
    if (this.props.topicId === -1) return <div>Please set a topicId for this plugin!</div>
    if (this.state.topic === null) return <div>Loading...</div>
    if (this.state.topic.content.length === 0) return null;
    return <div dangerouslySetInnerHTML={{__html: this.state.topic.content}}/>
  }
}

export default Topic;
