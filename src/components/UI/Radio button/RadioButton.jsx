import React from 'react';
import classes from './RadioButton.module.css'
const RadioButton = ({name, id, label, value}) => {
    return (
        <div>
            <input type={"radio"} name={name} id={id} className={classes.radio} value={value}/>
            <label for={id} className={classes.label}>{label}</label>
        </div>
    );
};

export default RadioButton;