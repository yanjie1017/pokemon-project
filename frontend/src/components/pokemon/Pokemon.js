import React, { Component } from "react"

class Pokemon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pokemon">
                <div className="name">
                    {this.props.name}
                </div>
            </div>
        );
    }
}

export default Pokemon