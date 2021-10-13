import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./head.css";
class head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [],
      username: "",
    };
  }
  componentDidMount() {
    this.setState({
      listUser: this.props.dataLogin,
    });
  }
  render() {
    console.log(`cek props user`, this.props);
    console.log(`cek state user`, this.state.listUser.name);
    return (
      <div className="head">
        <div className="search">Search</div>
        <div className="user-login">
          <div className="welcome">Welcome, {this.state.listUser.name}</div>
          <Avatar
            alt="Cindy Baker"
            src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataLogin: state.Users.dataLogin,
  isLogedIn: state.Users.statusLogin,
});

const mapDispatchToProps = (dispatch) => ({
  isLogin: (isLogin) => dispatch({ type: "LOGIN_OK", payload: { isLogin } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(head);
