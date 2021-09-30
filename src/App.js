import React, { Component } from 'react';
import NavigationBar from './components/NavBar/NavBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <React.Fragment>
        <NavigationBar/>
      </React.Fragment>

     );
  }
}


export default App;
