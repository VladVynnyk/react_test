import React from 'react';
import classes from "./FileInput.module.scss";
const FileInput = ({id}) => {
    return (
        <input type="file" id="file" className={classes.file}/>
    );
};

export default FileInput;