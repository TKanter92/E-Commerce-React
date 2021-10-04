import React, { Component } from 'react';
import axios from 'axios';
import Register from '../Register/Register';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import { Container, Row, Col, Input, Button } from 'bootstrap';
import './Login.css'

class Login  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
            jwt: null,
            register: false

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const credentials = {
            username: this.state.username,
            password: this.state.password,
        };
        this.props.getCredentials(credentials);
        
    }

    navToRegister = (event) => {
        // debugger;
        if (this.state.register == false)
        {this.state.register = true}
        else{this.state.register = false}
        this.setState(
           {register: this.state.register} 
        );
    }
    
    render() { 
        return ( 
            <div>
                {this.state.register ? 
                <Register register = {this.state.register} navToRegister={this.navToRegister}/>
                : 
                <div className="d-flex container justify-content-center align-items-center">
                    <form className="form-group" onSubmit={(event) => this.handleSubmit(event)}>
                        <div className = "row mb-3">
                            <label>Username:</label>
                            <div className="col-sm-10">
                                <input type="text" name="username" placeHolder="Username..." onChange={this.handleChange} value={this.state.username}/><br/>
                            </div>        
                        </div>
                        <div className = "row mb-3">
                            <label>Password:</label>
                            <div className="col-sm-10">
                                <input type="password" name="password" placeHolder="Password..." onChange={this.handleChange} value={this.state.password}/><br/>
                            </div>       
                        </div>
                        <div className="row">
                            <div className="col-sm-10 col-auto">
                                <button type="submit" className="btn btn-primary">Login</button>
                                <button className="btn btn-secondary" onClick = {this.navToRegister} >Register</button>
                            </div>
                        </div>
                    </form>
                <div>
                    
                </div>
            </div>
                }
            </div>
         );
    }
}
 
export default Login;