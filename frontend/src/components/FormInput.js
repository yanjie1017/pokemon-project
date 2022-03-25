import React, { Component } from "react";

class FormInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-input">
                <input 
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    required
                />
            </div>
        );
    }
}

export default FormInput