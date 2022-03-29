import React, { Component } from "react"
import { useNavigate } from 'react-router-dom';
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import styles from "./LoginPage.css"

export const LoginPage = () => {
    let navigate = useNavigate();

    const userLogin = (redirect, token) => {
        if (redirect) {
            navigate('/portfolio');
        }  
    }

    return (
        <div className={styles.loginPage}>
            <h1 className={styles.h1}>Pokemon</h1>
            <div className={styles.outerForm}>
                <LoginForm userLogin={userLogin}/>
                <SignupForm />
            </div>
        </div>
    );
}

export default LoginPage