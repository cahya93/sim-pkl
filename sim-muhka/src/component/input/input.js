import React, { Component } from "react";
class input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { type, name, placeholder, action, styles } = this.props;
    return (
      <input
        className={styles}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={action}
      />
    );
  }
}

export default input;
