import React from "react";
import {Avatar} from "antd";

class CasnodeAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Avatar
        src={this.props.avatar}
        style={{
          height: 36,
          width: 36,
          display: "inline-block",
        }}
      />
      <div style={{display: "inline-block"}}>{this.props.name}</div>
    </div>;
  }
}

export default CasnodeAvatar;
