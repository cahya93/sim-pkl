import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Swal from "sweetalert2";
class logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout = () => {
    this.props.isLogin();
    Swal.fire("Yeahhh", "Anda berhasil Logout", "success");
  };
  componentDidMount() {
    this.logout();
  }
  render() {
    if (!this.props.isLogedIn) return <Redirect to="/" />;
    return <div>{this.logout()}</div>;
  }
}
const mapStateToProps = (state) => ({
  isLogedIn: state.Users.statusLogin,
});
const mapDispatchToProps = (dispatch) => ({
  isLogin: (isLogin) => dispatch({ type: "LOGOUT_OK", payload: { isLogin } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(logout);
