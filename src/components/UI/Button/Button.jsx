import React from 'react';
import classes from './Button.module.scss';
const Button = ({text, disable, id}) => {
    return (
        <button className={classes.button} id={id} href="#" >{text}</button>
    );
};

export default Button;