import React, { Component } from "react";
class select extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, value, children } = this.props;
    return (
      <select name={name}>
        <option value={value}>{children}</option>
      </select>
    );
  }
}

export default select;
