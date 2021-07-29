import React from "react";
import * as Backends from "./Backends";
import {Avatar, Comment, Input, List, Button} from "antd";
import TextArea from "antd/es/input/TextArea";

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

  replyTo(target) {
    this.setState({
      text: `@${target} `,
    })
  }

  render() {
    if (this.props.topicId === -1) return null;
    if (this.state.replies === undefined ||
      this.state.replies === null) return <div>Loading...</div>;

    return <div>
      { this.props.account !== undefined && this.props.account !== null ? (<div>
        <Comment
          content={
            <div>
              <TextArea
                rows={4}
                placeholder={`Reply as ${this.props.account.name}`}
                onChange={e => this.setState({ text: e.target.value })}
                value={this.state.text}
              />
              <Button
                type={"primary"}
                style={{marginTop: 10}}
                onClick={() => this.submitNewReply()}
              >
                Send Reply
              </Button>
            </div>
          }
        />
      </div>) : null}
      <List
        className="comment-list"
        header={`${this.state.replies.length} replies`}
        itemLayout="horizontal"
        dataSource={this.state.replies}
        renderItem={item => (
          <li>
            <Comment
              actions={[<span key="comment-basic-reply-to" onClick={() => this.replyTo(item.author)}>Reply</span>]}
              author={item.author}
              avatar={<Avatar src={item.avatar} alt={item.author}/>}
              content={<div dangerouslySetInnerHTML={{__html: item.content}} />}
            />
          </li>
        )}
      />
    </div>;
  }
}

export default Reply;
