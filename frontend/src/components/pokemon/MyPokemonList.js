import React, { Component } from "react"
import MyPokemon from "./MyPokemon";

class MyPokemonList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pokemonList">
                {this.props.pokemons.map(
                    p => (
                        <MyPokemon
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            hp={p.hp}
                            attack={p.attack}
                            defense={p.defense}
                            type={p.type}
                            onDelete={this.props.onDelete}
                        />
                    )
                )}
            </div>
        );
    }
}

export default MyPokemonList