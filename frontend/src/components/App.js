import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import LoginPage from './LoginPage'
import HomePage from "./HomePage";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/login"
                        element={<LoginPage/>}
                    />
                    <Route path="/portfolio"
                        element={<HomePage/>}
                    />
                </Routes>
            </Router>
        );
    }
}

export default App

