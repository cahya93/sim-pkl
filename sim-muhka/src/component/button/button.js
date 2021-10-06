import React, { Component } from "react";
class button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children, styles, action } = this.props;
    return (
      <button className={styles} onClick={action}>
        {children}
      </button>
    );
  }
}

export default button;
