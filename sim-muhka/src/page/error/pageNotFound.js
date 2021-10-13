import React, { Component } from "react";
import img404 from "../../assets/image/404.gif";
import { Link } from "react-router-dom";
import "./error.css";
class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <img src={img404} alt="error 404" />
          <div className="info">This page could not be found</div>
          <Link to="/">
            <div className="button">Back To Home</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
