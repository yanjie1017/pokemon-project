import React, { Component } from "react";
import { Link } from 'react-router-dom';
import FormInput from "./FormInput";
import styles from "./LoginPage.css"

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                username: '',
                password: ''
            },
            buttonClicked: false
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

    login = (e) => {
        e.preventDefault();
        console.log("Login");
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(
            response => {
                if (response.ok) {
                    response = response.json()
                    this.props.userLogin(true, response.token);
                }
            }
        ).catch(error => console.error(error));
        this.setState({buttonClicked: true});
    }

    response = () => {
        if (!this.state.buttonClicked) return "";
        else if (!this.state.redirect) return "Incorrect username or password";
    }

    render() {
        return (
            <div>
                <form className={styles.loginForm} onSubmit={this.login}>
                    <h2 className={styles.h2}>Login form</h2>
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
                        className={styles.button} 
                        type="submit" 
                        value="Login"
                    />
                    <p className={styles.p}>{this.response()}</p>
                </form>
            </div>
        );
    }
}

export default LoginForm