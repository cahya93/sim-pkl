import { Img, Menu, Button } from "../../../component";
import "./navbar.css";
import Logo from "../../../assets/image/logo.png";
import { Link } from "react-router-dom";
import React, { Component } from "react";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <Link to="/">
            <Img image={Logo} />
          </Link>
        </div>
        <div className="menu-fix">
          <Link to="/">
            <Menu styles="menu">Home</Menu>
          </Link>
          <Link to="/juknis">
            <Menu styles="menu">Juknis</Menu>
          </Link>
          <Link to="/cetak">
            <Menu styles="menu">Cetak</Menu>
          </Link>
        </div>
        <div className="login">
          <Link to="/login">
            <Button styles="btn-login">Login</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
