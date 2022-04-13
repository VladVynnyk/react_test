import React from 'react';
import classes from "./Input.scss";
const Input = ({placeholder, type, name, id}) => {
    return (
        <div className="input-block">
            <input type={type} name={name} id={id} required spellCheck="false"/>
            <span className="placeholder">
                {placeholder}
            </span>
        </div>
    );
};

export default Input;