import React, { Component } from "react";
import FormInput from "./FormInput";

class SignupForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <FormInput type="text" placeholder="Username" />
                    <FormInput type="password" placeholder="Password" />
                    <FormInput type="password" placeholder="Confirm password" />
                    <input className="button submit-button" type="submit" value="Signup" />
                </form>
            </div>
        );
    }
}

export default SignupForm