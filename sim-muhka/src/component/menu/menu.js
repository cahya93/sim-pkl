import React, { Component } from "react";
import "./menu.css";
class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children, action } = this.props;
    return (
      <div className="menu" onClick={action}>
        {children}
      </div>
    );
  }
}

export default menu;
