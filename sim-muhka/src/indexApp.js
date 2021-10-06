import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
class indexApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

export default indexApp;
