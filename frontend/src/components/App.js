import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

class App extends Component {
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

export default App

