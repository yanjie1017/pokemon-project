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
            confirmPassword: false,
            response: ''
        }
    }

    handleUsername = (value) => {
        var credentials = {...this.state.credentials};
        credentials.username = value;
        this.setState({credentials: credentials});
        this.setState({response: ''});
    }

    handlePassword = (value) => {
        var credentials = {...this.state.credentials};
        credentials.password = value;
        this.setState({credentials: credentials});
        this.setState({response: ''});
    }

    confirmPassword = (value) => {
        const password = this.state.credentials.password;
        var confirmPassword = (value === password);
        this.setState({confirmPassword: confirmPassword});
        this.setState({response: ''});
    }

    signup = async(e) => {
        e.preventDefault();
        if (this.state.confirmPassword) {
            await fetch('http://127.0.0.1:8000/api/user/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.credentials)
            }).then(response => {
                    if (response.ok) {
                        this.setState({response: "You have signed up!"});
                    } else {
                        this.setState({response: "Username exists."});
                    }
                }
            ).catch(error => console.error(error));
        } else {
            this.setState({response: "Password incorrect."});
        }
    }

    render() {
        return (
            <div className="innerForm">
                <h1>Signup form</h1>
                <form className="loginForm" onSubmit={this.signup}>    
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
                        className="button"
                        type="submit" 
                        value="Signup"
                    />
                </form>
                <p className="formResponse">{this.state.response}</p>
            </div>
        );
    }
}

export default SignupForm