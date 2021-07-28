import React from "react";
import './App.css';
import Account from "./Account";
import Topic from "./Topic";
import Reply from "./Reply";
import Editor from "./Editor";
import * as Backends from "./Backends";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeId: "Casbin",
      topicId: 199,
      account: null,
    }
  }

  componentDidMount() {
    Backends.getAccount().then(account =>
      this.setState({account: account})
    );
  }

  render() {
    return <div>
      <Account account={this.state.account}/>
      <Topic topicId={this.state.topicId} />
      <Editor topicId={this.state.topicId} />
      <Reply topicId={this.state.topicId} />
    </div>;
  }
}

export default App;
