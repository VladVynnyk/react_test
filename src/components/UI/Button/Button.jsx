import React from 'react';
import classes from './Button.module.scss';
const Button = ({text, disable, id, click}) => {
    return (
        <button className={classes.button} id={id} href="#" onClick = {click}>{text}</button>
    );
};

export default Button;