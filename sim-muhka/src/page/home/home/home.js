import "./home.css";
import { Title } from "../../../component";
import React, { Component } from "react";
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="title">
        <Title>Selamat datang di aplikasi E-PKL</Title>
        <Title>SMK Muhammadiyah Karangmojo</Title>
      </div>
    );
  }
}

export default home;
