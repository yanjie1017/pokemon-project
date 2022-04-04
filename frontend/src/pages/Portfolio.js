import React, { Component, useEffect, useState } from "react"
import { useParams, useLocation } from 'react-router-dom';
import Navbar from "../components/common/NavBar"
import PokemonList from "../components/pokemon/PokemonList"
import MyPokemonList from "../components/pokemon/MyPokemonList"

export const Portfolio = () => {

    const {id} = useParams();
    const [myPokemons, setMyPokemons] = useState([]);
    const [otherPokemons, setOtherPokemons] = useState([]);
    const [change, setChange] = useState(0);
    
    useEffect(() => {
        async function getMyPokemons()  {
            await fetch(`http://127.0.0.1:8000/api/pokemon/mypokemon/${id}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }).then(response => response.json())
            .then(data => {
                data = Array.from(data);
                setMyPokemons(data);
            }).catch(error => console.error(error));
        }
        getMyPokemons();
    }, [id, change]);

    useEffect(() => {
        async function getOtherPokemons()  {
            await fetch(`http://127.0.0.1:8000/api/pokemon/unownedpokemon/${id}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }).then(response => response.json())
            .then(data => {
                data = Array.from(data);
                setOtherPokemons(data);
            }).catch(error => console.error(error));
        }
        getOtherPokemons();
    }, [id, change]);

    const releasePokemon = async(pokemonId) => {
        await fetch('http://127.0.0.1:8000/api/pokemon/releasepokemon', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: pokemonId})
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            setChange(1-change);
        }).catch(error => console.error(error));
    }

    return (
        <div className="portfolio">
            <Navbar id={id}/>
            <h1>My Pokemons</h1>
            <MyPokemonList pokemons={myPokemons} onDelete={releasePokemon}/>
            <h1>Other Pokemons</h1>
            <PokemonList pokemons={otherPokemons}/>
        </div>
    );
}

export default Portfolio