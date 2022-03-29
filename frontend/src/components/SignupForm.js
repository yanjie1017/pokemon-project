import React, { Component } from "react";
import FormInput from "./FormInput";

class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            credentials: {
                username: '',
                password: '',
            },
            confirmPassword: false
        }
    }

    handleUsername = (value) => {
        var credentials = {...this.state.credentials};
        credentials.username = value;
        this.setState({credentials: credentials});
    }

    handlePassword = (value) => {
        var credentials = {...this.state.credentials};
        credentials.password = value;
        this.setState({credentials: credentials});
    }

    confirmPassword = (value) => {
        const password = this.state.credentials.password;
        var confirmPassword = value === password;
        this.setState({confirmPassword: confirmPassword});
    }

    signup = (e) => {
        e.preventDefault();
        console.log("Signup");
        console.log(this.state.credentials);
        if (this.state.confirmPassword) {
            fetch('http://127.0.0.1:8000/api/user/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.credentials)
            }).then(
                response => {
                    console.log(response);
                    return response.text();
                }
            ).then (
                text => {
                    console.log(text)
                }
            ).catch(error => console.error(error));
        } 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.signup}>
                    <FormInput 
                        type="text" 
                        placeholder="Username" 
                        onChange={this.handleUsername}
                    />
                    <FormInput 
                        type="password" 
                        placeholder="Password" 
                        onChange={this.handlePassword}
                    />
                    <FormInput 
                        type="password" 
                        placeholder="Confirm password" 
                        onChange={this.confirmPassword}
                    />
                    <input 
                        className="button submit-button" 
                        type="submit" 
                        value="Signup"
                    />
                </form>
            </div>
        );
    }
}

export default SignupForm