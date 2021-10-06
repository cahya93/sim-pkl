import React, { Component } from "react";
class img extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { image, alt } = this.props;
    return <img src={image} alt={alt} />;
  }
}

export default img;
