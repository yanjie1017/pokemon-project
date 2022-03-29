import React, { Component } from "react";
import styles from "./LoginPage.css"

class FormInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input 
                    className={styles.input}
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    required
                    onChange={(e) => this.props.onChange(e.target.value)}
                />
            </div>
        );
    }
}

export default FormInput