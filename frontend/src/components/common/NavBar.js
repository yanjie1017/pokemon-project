import React, { Component, useState, useEffect } from "react"
import { Link } from "react-router-dom";

export const Navbar = ({ id }) => {

    const [username, setUsername] = useState('')

    useEffect(() => {
        async function getUsername() {
            fetch(`http://127.0.0.1:8000/api/user/${id}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }).then(response => response.json())
            .then(data => {
                setUsername(data.username);
            }).catch(error => console.error(error));
        }
        getUsername();
    }, []);

    return (
        <div className="navbar">
            <div className="left">
                <p>Pokemon</p>
                <Link to={`/portfolio/${id}`} className="link">My Portfolio</Link>
                <Link to={`/catch-pokemon/${id}`} className="link">Catch Pokemon</Link>
            </div>
            <div className="right">
                <span>{username}</span>
                <Link to="/login" className="link">Logout</Link>
            </div>
        </div>
    
    );
};
    
export default Navbar;