import React, { Component } from "react";
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer/footer";
import Head from "./head/head";
import { Dashboard, Logout, Profile } from "./";
import { PageNotFound } from "../error";
import "./dashboard.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { Divider } from "@material-ui/core";
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderPage = () => {
    return (
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={Logout} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    );
  };
  render() {
    if (!this.props.isLogedIn)
      return (
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Your is not logged!",
          footer: '<a href="/login">Login now?</a>',
        }) && <Redirect to="/" />
      );
    return (
      <div>
        <div className="dashboard">
          <div className="sidebar-page">
            <Sidebar />
          </div>
          <div className="dashboard-page">
            <div className="dashboard-head">
              <Head />
            </div>
            <Divider />
            <div>{this.renderPage()}</div>
          </div>
        </div>
        <div className="footer-dashboard">
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>
  // console.log(`state`, state.Users.users)
  ({
    isLogedIn: state.Users.statusLogin,
  });

export default connect(mapStateToProps)(home);
