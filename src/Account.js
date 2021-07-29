import React from "react";

class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  renderLogin() {
    return <button onClick={() => window.location.href = `${this.props.endpoint}/signin`}>Signin into Casnode</button>;
  }

  renderAccount() {
    return <div>Your Account: {this.props.account.name}</div>;
  }

  render() {
    return this.props.account === null ? this.renderLogin() : this.renderAccount();
  }
}

export default Account;
