import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import jwtDecode from "jwt-decode";
import Register from "./components/Register/Register";
// import { Switch } from 'react-router';
import { Redirect } from "react-router";
import { Route, Switch } from "react-router";
import {BrowserRouter} from "react-router-dom";
import axios from 'axios';
import DisplayProducts from './components/DisplayProducts/DisplayProducts';
import AddProductForm from './components/AddProductForm/AddProductForm';
import HomePage from './components/HomePage/HomePage';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ReviewForm from './components/ReviewForm/ReviewForm';
import TitleBar from './components/TitleBar/TitleBar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = {
    products: [],
    user: undefined,
    cart: [],
  };

  componentDidMount() {
    this.getAllProducts();
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({
        user: user,
      });
      console.log(this.state.products);
    } catch {}
  }

  async getAllProducts() {
    // debugger;
    let response = await axios.get("https://localhost:44394/api/product");
    this.setState({
      products: response.data,
    });
  }

  searchProducts = (results) => {
    console.log(results);
    console.log("App");
    this.setState({
      products: results,
    });
  };

  getCartProducts = async () => {
    let response = await axios.get("https://localhost:44394/api/cart");
    this.setState({
      cart: response.data,
    });
  };

  addNewProduct = async (productToAdd) => {
    const product = {
      productName: productToAdd.productName,
      artist: productToAdd.artist,
      price: parseInt(productToAdd.price),
      description: productToAdd.description,
      genre: productToAdd.genre,
      rating: parseInt(productToAdd.rating),
    };
    await axios.post("https://localhost:44394/api/product", product);
    this.getAllProducts();
    window.location = "/browse";
  };

  getCredentials = async (credentials) => {
    try {
      let response = await axios.post(
        "https://localhost:44394/api/authentication/login/",
        credentials
      );
      console.log(response);
      this.setState({
        user: response.data.token,
      });
      console.log("Loginuser: " + this.state.user);
      localStorage.setItem("token", response.token);
    } catch {
      console.log("Unsuccessful Login");
    }
  };

  logoutUser = (event) => {
    localStorage.removeItem("token");
    console.log("Logged Out");
    console.log(localStorage);
    this.setState({
      user: "",
    });
  };

  render() {
    return (
      <div>
        <NavBar user={this.state.user} logoutUser={this.logoutUser} />
        <TitleBar />
        <div>
          <BrowserRouter>
            <Switch>
              {/* <Route path= '/' exact component={HomePage} /> */}
              <Route
                path="/"
                exact
                render={(props) => {
                  if (!this.state.user) {
                    console.log("True: " + this.state.user);
                    return (
                      <Login {...props} getCredentials={this.getCredentials} />
                    );
                  } else {
                    console.log("false: " + this.state.user);
                    return (
                      <DisplayProducts
                        {...props}
                        productList={this.state.products}
                        searchProducts={this.searchProducts}
                        logoutUser={this.logoutUser}
                      />
                    );
                  }
                }}
              />
              {/* <Route path='/addnew' component={AddProductForm} /> */}
              <Route
                path="/addnew"
                render={(props) => (
                  <AddProductForm
                    {...props}
                    addNewProduct={this.addNewProduct}
                  />
                )}
              />
              <Route
                path="/browse"
                render={(props) => (
                  <DisplayProducts
                    {...props}
                    productList={this.state.products}
                    searchProducts={this.searchProducts}
                    logoutUser={this.logoutUser}
                  />
                )}
              />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Login} />
              <Route
                path="/shoppingCart"
                render={(props) => (
                  <ShoppingCart {...props} cartList={this.state.cart} />
                )}
              />

              <Route
                exact
                path="/details/:id"
                render={(props) => (
                  <ProductDetails {...props} details={this.state.products} />
                )}
              />
              <Route
                path="/review"
                render={(props) => (
                  <ReviewForm {...props} review={this.state.products} />
                )}
              />
              <Redirect to="/not-found" />
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
