import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import Api from "../../../service/api/api";
import "./login.css";
// import { Button } from "../../../component";
import { TextField, FormControl, Button } from "@material-ui/core";
const passwordHash = require("password-hash");

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      listUser: [],
      dataLogin: [
        {
          date_created: 1,
          email: "ekocahyanto007@gmail.com",
          id: 1,
          id_user: 1,
          image: "default.png",
          is_active: 1,
          name: "Eko Cahyanto",
          password: "sha1$822cffde$1$5473f2fe42997251482825e3a713108a907a9fc2",
          role_id: 1,
        },
      ],
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  cekLogin = (cek) => {
    const { email, password, pilih } = this.state;
    console.log(`cek`, pilih);
    if (cek.email !== email) {
      return Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Email is not register!",
        footer: '<a href="">Register now?</a>',
      });
    }
    if (email === cek.email && passwordHash.verify(password, cek.password)) {
      this.setState({
        email: "",
        password: "",
      });
      this.props.isLogin(this.state.dataLogin);
      this.props.history.push("/dashboard");
      return Swal.fire("Good Job!", "Login success", "success");
    }
    return Swal.fire(
      "Opss!!! Login Failed",
      "Email /  Password is Wrong",
      "error"
    );
  };
  handleSubmit = async () => {
    // this.props.isLogin(this.state.dataLogin);
    // console.log(`cek props`, this.props);
    // this.props.history.push("/dashboard");
    const { email, password, listUser } = this.state;
    console.log(`listUser`, listUser);
    if (email === "") return Swal.fire("Opss!!!", "Email is required", "error");
    if (password === "")
      return Swal.fire("Opss!!!", "Password is required", "error");
    await listUser
      .filter((user) => user.email === email)
      .map((filterData) => {
        console.log(`filterData`, filterData);
        return this.setState({
          dataLogin: filterData,
        });
      });
    await this.cekLogin(this.state.dataLogin);
  };
  getData = () => {
    Api.getUser().then((data) => {
      console.log(`data`, data.data);
      this.setState({
        listUser: data.data,
      });
    });
  };

  async componentDidMount() {
    await this.getData();
  }
  render() {
    const { email, password } = this.state;
    if (this.props.isLogedIn) return <Redirect to="/" />;

    return (
      <div>
        <div className="login">
          <div className="login-page">
            <div className="login-title">Log In</div>
            <FormControl>
              <TextField
                id="email"
                label="Email"
                type="Email"
                autoComplete="current-password"
                variant="standard"
                name="email"
                value={email}
                onChange={this.handleChange}
                style={{ marginTop: 10 }}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                name="password"
                value={password}
                onChange={this.handleChange}
                style={{ marginTop: 10 }}
              />
            </FormControl>
            <Button
              color="primary"
              variant="contained"
              style={{ margin: 10 }}
              onClick={this.handleSubmit}
            >
              Login
            </Button>
            <div>
              <div>
                <p>Or Sign In With</p>
              </div>
              <div className="bottom">
                <div
                  className="btn-fb"
                  onClick={() =>
                    Swal.fire(
                      "Opss!!!",
                      "login facebook belum tersedia",
                      "info"
                    )
                  }
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="fb"
                    width="30px"
                  />
                </div>
                <div
                  className="btn-google"
                  onClick={() =>
                    Swal.fire("Opss!", "login google belum tersedia", "info")
                  }
                >
                  <img
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                    alt="fb"
                    width="30px"
                  />
                </div>
              </div>
            </div>
            <div className="login-page-footer">
              <p>Don't Have Account?</p>
              <div
                className="btn-register"
                onClick={() =>
                  Swal.fire("Opss!!", "Sedang maintenance", "warning")
                }
              >
                Register Now
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataUsers: state.Users.listUser,
  isLogedIn: state.Users.statusLogin,
});

const mapDispatchToProps = (dispatch) => ({
  isLogin: (isLogin) => dispatch({ type: "LOGIN_OK", payload: { isLogin } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(login);
