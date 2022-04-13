import React from 'react';
import classes from './Form.module.scss';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import "./Form.css";
import {isDisabled} from "@testing-library/user-event/dist/utils";
import RadioButton from "../UI/Radio button/RadioButton";
import FileInput from "../UI/InputForFile/FileInput";
const Form = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title} >Working with POST request</div>
            <div className={classes.form}>
                <Input placeholder={"Your name"} className={classes.input}/>
                <Input placeholder={"Email"} className={classes.input}/>
                <Input placeholder={"Phone"} className={classes.input}/>

                    <div className={classes.radioForm}>
                        <div className={classes.titleForRadioForm}>Select your position</div>
                        <RadioButton id={"radio1"} name={"radio"} label={"Frontend developer"}/>
                        <RadioButton id={"radio2"} name={"radio2"} label={"Backend developer"}/>
                        <RadioButton id={"radio3"} name={"radio3"} label={"Designer"}/>
                        <RadioButton id={"radio4"} name={"radio4"} label={"QA"}/>
                    </div>
                <FileInput id={"fileInput1"} />
                </div>
            <br/>
            <Button text={"Sign up"} disabled id={"button1"}/>

        </div>
    );
};

export default Form;