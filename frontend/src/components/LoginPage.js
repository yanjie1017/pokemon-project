import React, { Component } from "react";

class LoginPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <h1>{this.props.name}</h1>
                <LoginForm />
                <SignupForm />
            </>
        );
    }
}

export default LoginPage