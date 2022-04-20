import React from 'react';
import classes from "./Input.scss";
const Input = ({placeholder, type, name, id, onBlur, onChange}) => {
    return (
        <div className="input-block">
            <input type={type} name={name} id={id} onBlur={onBlur} onChange={onChange} spellCheck="false"/>
            <span className="placeholder">
                {placeholder}
            </span>
        </div>
    );
};

export default Input;