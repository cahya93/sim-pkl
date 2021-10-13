import "./App.css";
import { connect } from "react-redux";
import React, { Component } from "react";
import Home from "./page/home/home";
import Dashboard from "./page/dashboard/dashboard";
import api from "./service/api/api";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: "",
    };
  }
  getAPI = () => {
    api.getJurusan().then((data) => {
      console.log("cek jurusan", data.data);
      this.props.jurusan(data.data);
    });
  };
  renderPage = () => {
    if (!this.props.isLogedIn) return <Home />;
    if (this.props.isLogedIn) return <Dashboard />;
  };
  componentDidMount = () => {
    this.renderPage();
    this.getAPI();
  };
  render() {
    console.log(`isLogin`, this.props.isLogedIn);
    return <div>{this.renderPage()}</div>;
  }
}

const mapStateToProps = (state) => ({
  isLogedIn: state.Users.statusLogin,
});
const mapDispatchToProps = (dispatch) => ({
  jurusan: (listJurusan) =>
    dispatch({ type: "JURUSAN_OK", payload: { listJurusan } }),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
