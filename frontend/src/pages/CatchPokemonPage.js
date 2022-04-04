import React, { Component, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/common/NavBar";
import Game from "../components/game/Game";
import MyPokemonList from "../components/pokemon/MyPokemonList";

function CatchPokemonPage() {

    const {id} = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [allPokemons, setAllPokemons] = useState([]);
    const [change, setChange] = useState(0);
    const [result, setResult] = useState(0);
    const [response, setResponse] = useState('');

    useEffect(() => {
        async function getFreePokemons()  {
            await fetch('http://127.0.0.1:8000/api/pokemon/freepokemon', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }).then(response => response.json())
            .then(data => {
                data = Array.from(data);
                setAllPokemons(data);
            }).catch(error => console.error(error));
        }
        getFreePokemons();
    }, [id, change])

    useEffect(() => {
        const index = Math.floor(Math.random()*allPokemons.length);
        const pokemon = allPokemons[index];
        setPokemon(pokemon);
    }, [allPokemons])

    const addPokemon = async(pokemonId) => {
        if (result === 1) {
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
                setResult(0);
                setResponse("Pokemon added successfully");
            }).catch(error => console.error(error));
        } else {
            setResponse("Pokemon not added. Please win the game first.");
        }
    }

    const setGameResult = (value) => {
        setResult(value)
    }

    return (
        <div className="catchPokemon">
            <Navbar id={id}/>
            <div className="catchContainer">
                <div className="catch">
                    {pokemon ? <MyPokemonList pokemons={[pokemon]}/> : <h1>No Free Pokemon</h1>}
                    {pokemon && 
                        <button className="button" onClick={() => addPokemon(pokemon.id)}>
                            Add
                        </button>
                    }
                    <p>{response}</p>
                </div>
                <Game id={id} onSubmit={setGameResult}/>
            </div>
        </div>
    );


}

export default CatchPokemonPage;
