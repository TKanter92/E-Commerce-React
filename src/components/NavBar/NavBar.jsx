import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login/Login';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: props.user,
      isLoggedIn: false,

     }
  }

  logoutUser =(event) =>{
    localStorage.removeItem('token');
    console.log("Logged Out")
    console.log(localStorage);
    this.setState({
      user: "",
      isLoggedIn: false
    })
   
  }

    //modal
  onClickButton = e =>{
    this.setState({openModal: true})
  }

  onCloseModal = () =>{
    this.setState({openModal:false})
  }

  //Changes isLogged
  changeLogin = () =>{
    this.setState({
      isLoggedIn: true
    })
  }

  render() { 
    const user = this.state.user;
    console.log("user " + user);
    return ( 

      <React.Fragment>
          
           
          {!this.state.isLoggedIn ? 
          <button onClick = {this.onClickButton} >Login</button>
          : <button onClick = {() =>this.logoutUser()}>Logout</button>
          }
          <Modal className="modal" open={this.state.openModal} onClose={this.onCloseModal}>
            <Login onCloseModal = {this.onCloseModal} changeLogin = {this.changeLogin}/>
          </Modal>
        
   
    
      </React.Fragment>
     );
  }
}
 
export default NavBar;