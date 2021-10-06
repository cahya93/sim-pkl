import React, { Component } from "react";
import "./title.css";
class title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children } = this.props;
    return <div className="title">{children}</div>;
  }
}

export default title;
