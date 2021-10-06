import "./footer.css";
import React, { Component } from "react";
class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  tahun = () => {
    var tahun = new Date();
    return tahun.getFullYear();
  };
  render() {
    return (
      <div className="footer">
        <p>
          Copyright © 2020 - {this.tahun()} IT Development{" "}
          <a href="https://smkmuhkarangmojo.sch.id">
            SMK Muhammadiyah Karangmojo.
          </a>{" "}
        </p>
        <p>
          Powered by <a href="https://cahya93.github.io/">YantoDev</a>
        </p>
      </div>
    );
  }
}

export default footer;
