import React, { Component, useEffect, useState } from "react"

function Game({ onSubmit }) {

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    const [answer, setAnswer] = useState(0);
    const [response, setResponse] = useState('');
    const [success, setSuccess] = useState(0);

    useEffect(() => {
        const x = Math.floor(Math.random()*100);
        setAnswer(x);
        setCount(0);
    }, [success])

    const handleNumber = (value) => {
        if (success !== 0) {
            setSuccess(0);
        }
        setNumber(parseInt(value));
    }

    const checkNumber = () => {
        if (count === 2 && number !== answer) {
            setSuccess(2);
            setResponse("Ohno :( No more chances. Please start a new game.")
            onSubmit(0);
            return;
        }
        if (number === answer) {
            setSuccess(1)
            setResponse("Congratulations! Your number is correct.");
            onSubmit(1);
        } else if (number > answer) {
            setResponse("Go lower");
        } else {
            setResponse("Go higher");
        }
        setCount(count + 1);
    } 

    return (
        <div className="game">
            <h1>Guess a number between 0 and 100</h1>
            <input type="number" min="0" max="100" 
                onChange={(e) => handleNumber(e.target.value)}
            />
            <button className="button" onClick={checkNumber}>Submit</button>
            <p>{response}</p>
        </div>
    );

   
}

export default Game;