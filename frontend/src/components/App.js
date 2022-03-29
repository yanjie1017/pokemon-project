import React, { Component } from "react";
import LoginPage from "./LoginPage";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>
                    React
                </h1>
                <LoginPage />
            </>
        );
    }
}

export default App

