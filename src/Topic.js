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
    Backends.getTopic(this.props.topicId).then(topic =>
      this.setState({topic: topic})
    );
  }

  render() {
    if (this.state.topic === null) return <div>Loading...</div>
    return <div>{this.state.topic.title}</div>
  }
}

export default Topic;
