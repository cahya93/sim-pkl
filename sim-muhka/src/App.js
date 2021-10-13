import "./App.css";
import { connect } from "react-redux";
import React, { Component } from "react";
import Home from "./page/home/home";
import Dashboard from "./page/dashboard/dashboard";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: "",
    };
  }

  renderPage = () => {
    if (!this.props.isLogedIn) return <Home />;
    if (this.props.isLogedIn) return <Dashboard />;
  };
  componentDidMount = () => {
    this.renderPage();
  };
  render() {
    console.log(`isLogin`, this.props.isLogedIn);
    return <div>{this.renderPage()}</div>;
  }
}

const mapStateToProps = (state) =>
  // console.log(`state`, state.Users.users)
  ({
    isLogedIn: state.Users.statusLogin,
  });

export default connect(mapStateToProps)(App);
