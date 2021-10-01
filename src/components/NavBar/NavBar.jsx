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

     }
  }

  logoutUser =(event) =>{
    localStorage.removeItem('token');
    console.log("Logged Out")
    console.log(localStorage);
  }

    //modal
  onClickButton = e =>{
    this.setState({openModal: true})
  }

  onCloseModal = () =>{
    this.setState({openModal:false})
  }

  render() { 
    const user = this.state.user;
    return ( 

      <React.Fragment>
          
           
          {!user ? 
          <button onClick = {this.onClickButton} >Login</button>
          : <button onclick = {this.logoutUser}>Logout</button>
          }
          <Modal className="modal" open={this.state.openModal} onClose={this.onCloseModal}>
            <Login onCloseModal = {this.onCloseModal}/>
          </Modal>
        
   
    
      </React.Fragment>
     );
  }
}
 
export default NavBar;