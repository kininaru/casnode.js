import React from "react";
import './App.css';
import Account from "./Account";
import Topic from "./Topic";
import Reply from "./Reply";
import * as Backends from "./Backends";

class App extends React.Component {
  constructor(props) {
    super(props);

    let casnodeDiv = document.getElementById("casnode-plugin");
    let endpoint = casnodeDiv.getAttribute("endpoint");
    if (endpoint === null || endpoint.length === 0) endpoint = null;
    let topicId = casnodeDiv.getAttribute("topicId");
    if (topicId === null) topicId = "-1";

    this.state = {
      nodeId: "Casbin",
      topicId: parseInt(topicId),
      account: null,
      endpoint: endpoint,
    }
  }

  componentDidMount() {
    Backends.getAccount(this.state.endpoint).then(account =>
      this.setState({account: account})
    );
  }

  render() {
    if (this.state.endpoint === null) return <div>Please set an endpoint to enable Casnode Plugin!</div>;
    return <div style={{margin: 10}}>
      <Topic endpoint={this.state.endpoint} topicId={this.state.topicId} />
      <Account endpoint={this.state.endpoint} account={this.state.account} />
      <Reply
        endpoint={this.state.endpoint}
        topicId={this.state.topicId}
        account={this.state.account}
      />
    </div>;
  }
}

export default App;
