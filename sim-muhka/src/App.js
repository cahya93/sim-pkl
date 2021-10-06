import "./App.css";
import Home from "./template/home/";
import Admin from "./template/admin";
import { connect } from "react-redux";
// import Api from "./service/api/api";
import React, { Component } from "react";
// const passwordHash = require("password-hash");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: "",
    };
  }
  // handleChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };
  // getData = () => {
  //   Api.getUser().then((data) => {
  //     console.log(`data`, data.data);
  //     this.setState({
  //       listUser: data.data,
  //     });
  //   });
  // };
  // renderData = () => {
  //   const { listUser } = this.state;
  //   return (
  //     <table border="1">
  //       <thead>
  //         <th>
  //           <tr>No</tr>
  //         </th>
  //         <th>
  //           <tr>Nama</tr>
  //         </th>
  //         <th>
  //           <tr>Email</tr>
  //         </th>
  //         <th>
  //           <tr>Password</tr>
  //         </th>
  //       </thead>
  //       <tbody>
  //         {listUser.map((data, idx) => (
  //           <tr key={idx}>
  //             <td>{idx + 1}</td>
  //             <td>{data.name}</td>
  //             <td>{data.email}</td>
  //             <td>{data.password}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   );
  // };
  // componentDidMount() {
  //   this.getData();
  // }
  // handleSubmit = () => {
  //   const { password } = this.state;
  //   var pass = "sha1$822cffde$1$5473f2fe42997251482825e3a713108a907a9fc2"; //12345
  //   var hashedpassword = passwordHash.verify(password, pass);
  //   console.log(`hashedpassword`, hashedpassword);
  // };
  renderPage = () => {
    // const { isLogin } = this.state;
    if (!this.props.isLogedIn) return <Home />;
    if (this.props.isLogedIn) return <Admin />;
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
