import React, { Component } from "react";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

class LoginPage extends Component {
    constructor(props) {
        super(props);

    }

    userLogin = (token) => {

    }

    render() {
        return (
            <div className="login-page">
                <h1>Pokemon</h1>
                <div className="login-form">
                    <LoginForm userLogin={this.userLogin}/>
                    <SignupForm />
                </div>
            </div>
        );
    }
}

export default LoginPage