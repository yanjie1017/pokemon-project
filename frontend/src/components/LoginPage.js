import React, { Component } from "react";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

class LoginPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <h1>Login</h1>
                <button>Login</button>
                <button>Signup</button>
                <LoginForm />
                <SignupForm />
            </>
        );
    }
}

export default LoginPage