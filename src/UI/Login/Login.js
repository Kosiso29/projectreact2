import React from 'react';
import classes from './Login.module.css';
import Login from '../../assets/images/login.png';

const login = () => (
    <div className={classes.Login}>
        <div>
            <img src={Login} alt='' />
            <p>Login Successful</p>
        </div>
    </div>
);

export default login;