import { Home, Login } from "./";
import { Maintenance, PageNotFound } from "../error";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Logout } from "../dashboard";
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderPage = () => {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/juknis" component={Maintenance} />
        <Route path="/cetak" component={Maintenance} />
        <Route path="/login" children={(props) => <Login {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    );
  };
  render() {
    return (
      <div>
        <Navbar />
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}

export default home;
