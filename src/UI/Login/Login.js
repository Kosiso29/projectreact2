import React from 'react';
import classes from './Login.module.css';
import Login from '../../assets/images/login.png';
import Spinner from '../Spinner/Spinner';

const login = (props) => (
    <div className={classes.Login}>
        <div style={{display: props.login}}>
            <img src={Login} alt='' />
            <p>{props.text}</p>
        </div>
        {props.spinner ? <Spinner /> : null}
    </div>
);

export default login;