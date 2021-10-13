import { Title } from "../../../component";
import "./home.css";
import React, { Component } from "react";
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="title">
          <Title>Selamat datang di aplikasi E-PKL</Title>
          <Title>SMK Muhammadiyah Karangmojo</Title>
        </div>
      </div>
    );
  }
}

export default home;
