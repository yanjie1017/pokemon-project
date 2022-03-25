import React, { Component } from "react";
import FormInput from "./FormInput";

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <FormInput type="text" placeholder="Username" />
                    <FormInput type="password" placeholder="Password" />
                    <input className="button submit-button" type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default LoginForm