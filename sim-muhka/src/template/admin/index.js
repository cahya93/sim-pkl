import React, { Component } from "react";
import Body from "./body/body";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderPage = () => {
    return <Body />;
  };
  render() {
    return <div>{this.renderPage()}</div>;
  }
}

export default index;
