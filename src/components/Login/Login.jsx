import React, { Component } from 'react';
import axios from 'axios';
import Register from '../Register/Register';


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
        this.getCredentials();
        this.props.onCloseModal();
        
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
    
    getCredentials = async () => {
        // debugger;
        const credentials = {
            username: this.state.username,
            password: this.state.password,
        };
        try{
            let response= await axios.post("https://localhost:44394/api/authentication/login/", credentials);
            console.log(response);
            // this.state.jwt= response;
            localStorage.setItem('token', response.token);
            
        }
        catch{
            console.log("Unsuccessful Login");
        }
    }

    render() { 
        return ( 
            <div>
                {this.state.register ? 
                <Register register = {this.state.register} navToRegister={this.navToRegister}/>
                : 
                <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Username:</label>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/><br/>
                <label>Password:</label>
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                <button type="submit">Login</button>
                </form>
                <div>
                    <button onClick = {this.navToRegister} >Register</button>
                </div>
            </div>
                }
            </div>

         );
    }
}
 
export default Login;