import React from "react";
import CasnodeAvatar from "./CasnodeAvatar";
import {Button} from "antd";

class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  renderLogin() {
    return <Button onClick={() => window.location.href = `${this.props.endpoint}/signin`}>
      Signin into Casnode
    </Button>;
  }

  renderAccount() {
    return <div>
      <CasnodeAvatar avatar={this.props.account.avatar} name={this.props.account.name} />
    </div>;
  }

  render() {
    return this.props.account === null ? this.renderLogin() : null;
  }
}

export default Account;
