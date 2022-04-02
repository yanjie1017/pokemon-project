import React, { Component } from "react"
import Pokemon from "./Pokemon";

class PokemonList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pokemonList">
                {this.props.pokemons.map(
                    p => (
                        <Pokemon
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            hp={p.hp}
                            attack={p.attack}
                            defense={p.defense}
                            type={p.type}
                        />
                    )
                )}
            </div>
        );
    }
}

export default PokemonList