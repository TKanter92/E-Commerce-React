import React, { Component } from 'react';
import NavigationBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <React.Fragment>
        <NavigationBar/>
        <Login/>
      </React.Fragment>

     );
  }
}


export default App;
