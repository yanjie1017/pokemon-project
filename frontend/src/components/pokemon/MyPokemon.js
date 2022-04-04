import React, { Component } from "react"

class MyPokemon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ownedPokemon">
                <div className="pokemon">
                    <div className="name">NAME: {this.props.name}</div>
                    <div>HP: {this.props.hp}</div>
                    <div>ATTACK: {this.props.attack}</div>
                    <div>DEFENSE: {this.props.defense}</div>
                    <div>TYPE: {this.props.type}</div>
                </div>
                <button onClick={() => this.props.onDelete(this.props.id)}>Release</button>
            </div>
        );
    }
}

export default MyPokemon