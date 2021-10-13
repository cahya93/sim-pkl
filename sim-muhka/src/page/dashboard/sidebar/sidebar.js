import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Menu from "../../../component/menu/menu";
import logo from "../../../assets/image/PKL.png";
import {
  FaTachometerAlt,
  FaUserAlt,
  FaSignOutAlt,
  FaBook,
  FaBookOpen,
  FaQuran,
  FaLockOpen,
  FaRegAddressBook,
  FaPaperclip,
  FaFilePdf,
  FaCertificate,
  FaDatabase,
} from "react-icons/fa";
import { Divider } from "@material-ui/core";
import { connect } from "react-redux";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
      dataLogin: [],
    };
  }
  showMenu = () => {
    this.setState({
      displayMenu: true,
    });
  };
  hideMenu = () => {
    this.setState({
      displayMenu: false,
    });
  };
  componentDidMount() {
    console.log(`cek datalogin`, this.props.isLogedIn.dataLogin);
    this.setState({
      dataLogin: this.props.isLogedIn.dataLogin,
    });
  }
  renderMenu = () => {
    const { dataLogin } = this.state;
    if (dataLogin.role_id === 1) return this.menuAdmin();
    if (dataLogin.role_id === 2) return this.menuSiswa();
  };
  menuAdmin = () => {
    return (
      <>
        <Menu
          action={
            !this.state.displayMenu
              ? () => this.showMenu()
              : () => this.hideMenu()
          }
        >
          <FaDatabase /> Data PKL
        </Menu>
        <Menu
          action={
            !this.state.displayMenu
              ? () => this.showMenu()
              : () => this.hideMenu()
          }
        >
          <FaBook /> Cetak Surat PKL
        </Menu>
        <Menu
          action={
            !this.state.displayMenu
              ? () => this.showMenu()
              : () => this.hideMenu()
          }
        >
          <FaDatabase /> Master Data
        </Menu>
      </>
    );
  };
  menuSiswa = () => {
    return (
      <>
        <Link to="/laporan">
          <Menu>
            <FaBook /> Laporan
          </Menu>
        </Link>
        <Menu
          action={
            !this.state.displayMenu
              ? () => this.showMenu()
              : () => this.hideMenu()
          }
        >
          <FaBookOpen /> Data PKL
        </Menu>
        {this.state.displayMenu ? (
          <div className="display-menu">
            <Link to="/laporan">
              <Menu>
                <FaRegAddressBook /> Data PKL
              </Menu>
            </Link>
            <Link to="/laporan">
              <Menu>
                <FaPaperclip /> Surat Balasan
              </Menu>
            </Link>
            <Link to="/laporan">
              <Menu>
                <FaFilePdf /> Surat Pernyataan
              </Menu>
            </Link>
            <Link to="/laporan">
              <Menu>
                <FaRegAddressBook /> ID Card
              </Menu>
            </Link>
            <Link to="/laporan">
              <Menu>
                <FaCertificate /> Sertifikat
              </Menu>
            </Link>
          </div>
        ) : (
          ""
        )}
        <Link to="/ibadah-siswa">
          <Menu>
            <FaQuran /> Ibadah-Ku
          </Menu>
        </Link>
      </>
    );
  };
  render() {
    return (
      <div className="sidebar">
        <Link to="/">
          <div className="logo-sidebar">
            <img src={logo} alt="" /> PKL-MOEKA
          </div>
        </Link>
        <Divider />
        <Link to="/dashboard">
          <Menu>
            <FaTachometerAlt /> Dashboard
          </Menu>
        </Link>
        <Link to="/profile">
          <Menu>
            <FaUserAlt /> Profile
          </Menu>
        </Link>
        {this.renderMenu()}
        <Divider />
        <Link to="/change-password">
          <Menu>
            <FaLockOpen /> Change Password
          </Menu>
        </Link>
        <Link to="/logout">
          <Menu>
            <FaSignOutAlt /> Logout
          </Menu>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLogedIn: state.Users,
});
const mapDispatchToProps = (dispatch) => ({
  isLogin: (isLogin) => dispatch({ type: "LOGIN_OK", payload: { isLogin } }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
