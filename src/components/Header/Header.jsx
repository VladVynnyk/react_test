import React from 'react';
import classes from './Header.module.scss';
import logo from './Logo.svg';
import Button from "../UI/Button/Button";
const Header = () => {
    return (
        <div className={classes.header}>
            <img className={classes.logo} src={logo} alt="Logo"/>
            <div className={classes.buttonContainer}>
                <Button text={"Users"}/>
                <Button text={"Sign up"} className={classes.button}></Button>
            </div>
        </div>
    );
};

export default Header;