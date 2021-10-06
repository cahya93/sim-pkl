import React, { Component } from "react";
class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children, action, styles } = this.props;
    return (
      <div className={styles} onClick={action}>
        {children}
      </div>
    );
  }
}

export default menu;
