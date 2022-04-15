import React, {useEffect} from 'react';
import classes from './Form.module.scss';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import "./Form.css";
import {isDisabled} from "@testing-library/user-event/dist/utils";
import RadioButton from "../UI/Radio button/RadioButton";
import FileInput from "../UI/InputForFile/FileInput";
import {useDispatch, useSelector} from "react-redux";
import {positionsAction} from "../../actions/requestsActions";


const Form = () => {
    let dispatch = useDispatch()
    const positionsReducer = useSelector(state => state.positionsReducer)
    const {loading, positions, error} = positionsReducer
    useEffect(()=>{
        dispatch(positionsAction())
    }, [dispatch])
    return (
        <div className={classes.container}>
            <div className={classes.title} >Working with POST request</div>
            <div className={classes.form}>
                <Input placeholder={"Your name"} className={classes.input}/>
                <Input placeholder={"Email"} className={classes.input}/>
                <Input placeholder={"Phone"} className={classes.input}/>

                    <div className={classes.radioForm}>
                        <div className={classes.titleForRadioForm}>Select your position</div>
                      {/*  <RadioButton id={"radio1"} name={"radio"} label={"Frontend developer"}/>
                        <RadioButton id={"radio2"} name={"radio2"} label={"Backend developer"}/>
                        <RadioButton id={"radio3"} name={"radio3"} label={"Designer"}/>
                        <RadioButton id={"radio4"} name={"radio4"} label={"QA"}/>*/}
                        {loading ? <h2>Loading...</h2>
                        : error ? <h3>{error}</h3>
                            : positions.map(position => <RadioButton label={position.name} id={position.id} value={position.value}/>)}
                    </div>
                <FileInput id={"fileInput1"} />
                </div>
            <br/>
            <Button text={"Sign up"} disabled id={"button1"}/>

        </div>
    );
};

export default Form;