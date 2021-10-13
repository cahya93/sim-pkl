import "./footer.css";
import React, { Component } from "react";
class Footer extends Component {
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
      <div className="foot">
        <div className="footer">
          <p>
            Copyright © 2020 - {this.tahun()} IT Development{" "}
            <a href="https://smkmuhkarangmojo.sch.id">SMK Muh Karangmojo.</a>{" "}
          </p>
          <p>
            Powered by <a href="https://cahya93.github.io/">YantoDev</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
