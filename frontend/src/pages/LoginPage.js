import React, { Component, useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import LoginForm from "../components/login/LoginForm"
import SignupForm from "../components/login/SignupForm";

export const LoginPage = () => {
    let navigate = useNavigate();

    const login = (redirect, username) => {
        if (redirect) {
            fetch(`http://127.0.0.1:8000/api/user/username/${username}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }).then(response => response.json())
            .then(data => {
                navigatePortfolio(data[0].id);
            })
        }  
    }

    const navigatePortfolio = (id) => {
        navigate(`/portfolio/${id}`)
    }

    return (
        <div className="loginPage">
            <div className="navbar loginHeader">
                <p>Pokemon</p>
            </div>
            <div className="outerForm">
                <LoginForm navigate={login}/>
                <SignupForm/>
            </div>
        </div>
    );
}

export default LoginPage