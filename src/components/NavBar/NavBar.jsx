import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login/Login';
// import { Modal } from 'react-responsive-modal';
// import 'react-responsive-modal/styles.css'


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


  render() { 
    const user = this.state.user;
    return ( 

      <React.Fragment>
          
           
          {/* <button onClick = {this.onClickButton} >Login</button> */}
           <button type="button" onClick = {() => this.logoutUser()}>Logout</button>
          

        
   
    
      </React.Fragment>
     );
  }
}
 
export default NavBar;