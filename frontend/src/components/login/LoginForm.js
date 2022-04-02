import React, { Component } from "react";
import { Link } from 'react-router-dom';
import FormInput from "./FormInput";

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            credentials: {
                username: '',
                password: ''
            },
            buttonClicked: false,
            redirect: false
        }
    }

    handleUsername = (value) => {
        var credentials = {...this.state.credentials};
        credentials.username = value;
        this.setState({credentials});
        this.setState({buttonClicked: false});
    }

    handlePassword = (value) => {
        var credentials = {...this.state.credentials};
        credentials.password = value;
        this.setState({credentials});
        this.setState({buttonClicked: false});
    }

    login = async(e) => {
        e.preventDefault();
        await fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(response => response.json())
        .then(response => {
                this.setState({redirect: true});
                this.props.navigate(
                    true, 
                    this.state.credentials.username, 
                    response.token
                );
            }
        ).catch(error => {
            this.setState({redirect: false});
            console.error(error);
        });
        this.setState({buttonClicked: true});
    }

    response = () => {
        if (!this.state.buttonClicked) return "";
        else if (!this.state.redirect) return "Incorrect username or password";
    }

    render() {
        return (
            <div className="innerForm">
                <h1>Login form</h1>
                <form className="loginForm" onSubmit={this.login}>
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
                    <input 
                        className="button" 
                        type="submit" 
                        value="Login"
                    />
                </form>
                <p>{this.response()}</p>
            </div>
        );
    }
}

export default LoginForm