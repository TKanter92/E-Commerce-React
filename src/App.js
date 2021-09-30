import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import jwtDecode from 'jwt-decode';
import Register from './components/Register/Register';
// import { Switch } from 'react-router';
import { Redirect } from 'react-router';
import { Route, Switch } from "react-router";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
  state = {  }

  

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
      const user = jwtDecode(jwt);
      this.setState({
        user: undefined
      });
    } catch {

    }
  }
  render() { 
    const user = this.state.user;
    return (
      <div>
        <NavBar user={user} />
        <div>
          <BrowserRouter>
          <Switch>
            <Route path= '/home' render={props =>{
                if (!user){
                  return <Redirect to='/login' />;
                } else {
                  return <Register {...props} user={user} />
                }
              }}
            />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Login} />
            <Route path='/shoppingCart' component={Login} />
            <Route path='/' component={Login} />

            <Redirect to='/not-found' />
          </Switch>
          </BrowserRouter>
        </div>
      </div>

    );
  }
}
export default App;
