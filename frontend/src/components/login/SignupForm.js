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
            signedUp: false,
            buttonClicked: false,
        }
    }

    handleUsername = (value) => {
        var credentials = {...this.state.credentials};
        credentials.username = value;
        this.setState({credentials: credentials});
        this.setState({buttonClicked: false});
    }

    handlePassword = (value) => {
        var credentials = {...this.state.credentials};
        credentials.password = value;
        this.setState({credentials: credentials});
        this.setState({buttonClicked: false});
    }

    confirmPassword = (value) => {
        const password = this.state.credentials.password;
        var confirmPassword = value === password;
        this.setState({confirmPassword: confirmPassword});
    }

    signup = async(e) => {
        e.preventDefault();
        if (this.state.confirmPassword) {
            await fetch('http://127.0.0.1:8000/api/user/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.credentials)
            }).then(
                response => {
                    if (response.ok) {
                        this.setState({signedUp: true})
                    } 
                }
            ).catch(error => console.error(error));
        } 
        this.setState({buttonClicked: true})
    }

    response = () => {
        if (!this.state.buttonClicked) return "";
        else if (this.state.signedUp) return "You have signed up!";
        else if (this.state.confirmPassword) return "Username exists.";
        else return "Password incorrect.";
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
                <p className="formResponse">{this.response()}</p>
            </div>
        );
    }
}

export default SignupForm