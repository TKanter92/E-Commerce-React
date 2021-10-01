import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import jwtDecode from 'jwt-decode';
import Register from './components/Register/Register';
// import { Switch } from 'react-router';
import { Redirect } from 'react-router';
import { Route, Switch } from "react-router";
import {BrowserRouter} from "react-router-dom";
import axios from 'axios';
import DisplayProducts from './components/DisplayProducts/DisplayProducts';
import AddProductForm from './components/AddProductForm/AddProductForm';

class App extends Component {
  state = { 
      products: [],
      user: "",
   }

  

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
      const user = jwtDecode(jwt);
      this.setState({
        user: this.state.user
      });
      this.getAllProducts();
    } catch {

    }
  }

  async getAllProducts () {
    let response = await axios.get('https://localhost:44394/api/product')
    this.setState({
      products: response.data
    });
  }

  addNewProduct = async (productToAdd) => {
    await axios.post('https://localhost:44394/api/product', productToAdd)
    this.getAllProducts();
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
                  return <App {...props} user={user} />
                }
              }}
            />
            <Route path='/addnew' component={AddProductForm} />
            {/* <Route path='/browse' component={DisplayProducts} /> */}
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
