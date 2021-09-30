import React, { Component } from 'react';
import axios from 'axios';


class Login  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
            jwt: null
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        
    }

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
            <label>Username:</label>
            <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
            <label>Password:</label>
            <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
            <button type="submit">Login</button>
            </form>
         );
    }
}
 
export default Login;