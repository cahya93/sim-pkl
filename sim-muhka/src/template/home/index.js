import Navbar from "./navbar/navbar";
import Body from "./body/body";
import Footer from "./footer/footer";

// export { Navbar, Body, Footer };
import React, { Component } from "react";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <div className="app-navbar">
          <Navbar />
        </div>
        <div className="app-body">
          <Body />
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default index;
