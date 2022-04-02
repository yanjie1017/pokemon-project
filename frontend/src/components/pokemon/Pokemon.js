import React, { Component } from "react"

class Pokemon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pokemon">
                <div className="name">NAME: {this.props.name}</div>
                <div>HP: {this.props.hp}</div>
                <div>ATTACK: {this.props.attack}</div>
                <div>DEFENSE: {this.props.defense}</div>
                <div>TYPE: {this.props.type}</div>
            </div>
        );
    }
}

export default Pokemon