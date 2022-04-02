import React, { Component, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Pokemon from "../components/pokemon/Pokemon";
import PokemonList from "../components/pokemon/PokemonList";

function CatchPokemon() {

    const [pokemon, setPokemon] = useState(null);
    const [allPokemons, setAllPokemons] = useState([]);
    const [change, setChange] = useState(0);
    const {id} = useParams();

    useEffect(() => {
        async function getMyPokemons()  {
            await fetch('http://127.0.0.1:8000/api/pokemon/freepokemon', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }).then(response => response.json())
            .then(data => {
                data = Array.from(data);
                setAllPokemons(data);
            }).catch(error => console.error(error));
        }
        getMyPokemons();
    }, [])

    useEffect(() => {
        const index = Math.floor(Math.random()*allPokemons.length);
        const pokemon = allPokemons[index];
        setPokemon(pokemon);
    }, [allPokemons])

    const addPokemon = async(pokemonId) => {
        console.log(id);
        await fetch('http://127.0.0.1:8000/api/pokemon/addpokemon', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: pokemonId,
                owner: id
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            setChange(1-change);
        }).catch(error => console.error(error));
    }

    return (
        <div>
            <PokemonList pokemons={[pokemon]}/>
            <button 
                className="button" 
                onClick={() => addPokemon(pokemon.id)}
            >
                Add
            </button>
        </div>
    );
}

export default CatchPokemon;
