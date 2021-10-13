import React, { Component } from "react";
import imgMaintenace from "../../assets/image/maintenance-mode.gif";
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
          <img src={imgMaintenace} alt="error 404" />
          <div className="info">This page is under maintenance</div>
          <Link to="/">
            <div className="button">Back To Home</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
