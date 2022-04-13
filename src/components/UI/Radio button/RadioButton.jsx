import React from 'react';
import classes from './RadioButton.module.css'
const RadioButton = ({name, id, label}) => {
    return (
        <div>
            <input type={"radio"} name={name} id={id} className={classes.radio}/>
            <label for={id} className={classes.label}>{label}</label>
        </div>
    );
};

export default RadioButton;