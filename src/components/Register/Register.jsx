import React, { Component } from 'react';
import axios from 'axios';


class Register  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName:"",
            email:"",
            username: "",
            password:"",
            user: props.user,
            register: props.register

        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.getRegistrationInfo();
        this.props.navToRegister();
    }

    getRegistrationInfo = async () => {
        // debugger;
        const registrationInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };

        try{
            let response= await axios.post("https://localhost:44394/api/authentication/", registrationInfo);
            console.log(response);
        }
        catch{
            console.log("Unsuccessful Registration");
        }
    }

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
            <label>First Name:</label>
            <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/><br/>
            <label>Last Name:</label>
            <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}/><br/>
            <label>Email:</label>
            <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/><br/>
            <label>Username:</label>
            <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/><br/>
            <label>Password:</label>
            <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
            <button type="submit">Register</button>
            </form>
        );
    }
}
 
export default Register;