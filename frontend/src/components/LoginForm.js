import { PostAdd } from "@material-ui/icons";
import React, { Component } from "react";
import { SingleEntryPlugin } from "webpack";
import FormInput from "./FormInput";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    login = (e) => {
        e.preventDefault();
        console.log("Login");
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        }).then(
            response => {
                this.props.userLogin(response.token);
            }
        ).catch(error => console.error(error));
    }

    handleUsername = (value) => {
        var credentials = {...this.state.credentials};
        credentials.username = value;
        this.setState({credentials});
    }

    handlePassword = (value) => {
        var credentials = {...this.state.credentials};
        credentials.password = value;
        this.setState({credentials});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
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
                        className="button submit-button" 
                        type="submit" 
                        value="Login"
                    />
                </form>
            </div>
        );
    }
}

export default LoginForm