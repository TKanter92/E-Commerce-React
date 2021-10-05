import React, { Component } from "react";
import ReactDOM from "react-dom";
import Login from "../Login/Login";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import DisplayProducts from "../DisplayProducts/DisplayProducts";
import AddProductForm from "../AddProductForm/AddProductForm";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      isLoggedIn: false,
    };
  }

  onClickButton = (e) => {
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  //Changes isLogged
  changeLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    return (
      <React.Fragment>
        {!this.props.user ? null : (
          <div className="d-flex container justify-content-end align-items-center">
            <button
              className="btn btn-outline-primary"
              onClick={() => this.props.logoutUser()}
            >
              Logout
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default NavBar;
