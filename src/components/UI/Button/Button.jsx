import React from 'react';
import classes from './Button.module.scss';
const Button = ({text, disabled, id, click, styles, type}) => {
    return (
        <button className={styles==="disabledButton" ? classes.disabledButton : classes.button} id={id} href="#" onClick = {click} disabled={disabled} type={type}>{text}</button>
    );
};

export default Button;