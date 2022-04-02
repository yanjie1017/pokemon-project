import React, { Component } from "react"
import Pokemon from "./Pokemon";

class MyPokemon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ownedPokemon">
                <Pokemon
                    id={this.props.id}
                    name={this.props.name}
                    hp={this.props.hp}
                    attack={this.props.attack}
                    defense={this.props.defense}
                    type={this.props.type}
                />
                <button onClick={() => this.props.onDelete(this.props.id)}>Release</button>
            </div>
        );
    }
}

export default MyPokemon