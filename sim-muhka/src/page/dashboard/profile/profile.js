import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Swal from "sweetalert2";

class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
        <div>ini profile</div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>
  // console.log(`state`, state.Users.users)
  ({
    isLogedIn: state.Users.statusLogin,
  });

export default connect(mapStateToProps)(profile);
