import React, {useEffect, useState} from 'react';
import classes from './Form.module.scss';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import "./Form.css";
import RadioButton from "../UI/Radio button/RadioButton";
import FileInput from "../UI/InputForFile/FileInput";
import {useDispatch, useSelector} from "react-redux";
import {positionsAction, registerAction} from "../../actions/requestsActions";

const Form = () => {
    let dispatch = useDispatch()
    const positionsReducer = useSelector(state => state.positionsReducer)
    const {loading, positions, error} = positionsReducer

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [positionId, setPositionId] = useState('');
    const [photo, setPhoto] = useState();
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [nameError, setNameError] = useState('Error');
    const [emailError, setEmailError] = useState('Error');
    const [phoneError, setPhoneError] = useState('Error');
    const [formValid, setFormValid] = useState(false)

    useEffect(()=>{
        dispatch(positionsAction())
        if(emailError || phoneError){
            setFormValid(false)
        }
        else{setFormValid(true)}
    }, [dispatch, emailError, phoneError])

    const nameHandler = (e) => {
        setName(e.target.value);
        if(e.target.value.length<2 || e.target.value.length>60) {
            setNameError("Довжина імені не правильна")
        }
        if(!e.target.value){
            setNameError("Ім'я не може бути порожнім")
        }
        else {
            setNameError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/gm;
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError("Email не правильний")
        }
        else{
            setEmailError('')
        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
        const template = /^[\+]{0,1}380([0-9]{9})$/gm;
        if(!template.test(String(e.target.value).toLowerCase())){
            setPhoneError("Номер телефону не правильний")
        }
        else if(!e.target.value){
            setPhoneError("Номер телефону не може бути порожнім")
        }
        else{
            setPhoneError('')
        }
    }
    const positionHandler = (e) => {
        setPositionId(e.target.value)
    }
    const photoHandler = (e) => {
        const [f] = e.target.files;
        setPhoto(f);
    }

    const blurHandler = (e) => {
        switch(e.target.name){
            case 'name':
                setNameDirty(true)
                break;
            case 'email':
                setEmailDirty(true)
                break;
            case 'phone':
                setPhoneDirty(true)
                break;
        }
    }
    const submitForm = (e) =>{
        e.preventDefault()
        console.log("Submitted")
        const {token} = fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                dispatch(registerAction(name, email, phone, positionId, photo, data.token))
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    return (
        <div className={classes.container}>
            <div className={classes.title} >Working with POST request</div>
            <div className={classes.form}>
                <form onSubmit={/*registerAction(name, email, phone, positions.name, positions.id)*/ e=>submitForm(e)}>
                    <Input placeholder={"Your name"} name={"name"} onBlur={e=>blurHandler(e)} value={name} onChange={e=>nameHandler(e)} value={name} className={classes.input}/>
                    {(nameDirty && nameError) && <div style={{color:'red', position:'relative', left:'300px', top:'-45px'}}>{nameError}</div>}
                    <Input placeholder={"Email"} name={"email"} type={"email"} onBlur={e=>blurHandler(e)} onChange={e=>emailHandler(e)} value={email} className={classes.input}/>
                    {(emailDirty && emailError) && <div style={{color:'red', position:'relative', left:'300px', top:'-45px'}}>{emailError}</div>}
                    <Input placeholder={"Phone"} name={"phone"} type={"tel"} onBlur={e=>blurHandler(e)} onChange={e=>phoneHandler(e)} value={phone} className={classes.input}/>
                    {(phoneDirty && phoneError) && <div style={{color:'red', position:'relative', left:'300px', top:'-45px'}}>{phoneError}</div>}

                        <div className={classes.radioForm}>
                            <div className={classes.titleForRadioForm}>Select your position</div>
                           {/*<RadioButton id={"radio1"} name={"radio"} label={"Frontend developer"}/>
                            <RadioButton id={"radio2"} name={"radio2"} label={"Backend developer"}/>
                            <RadioButton id={"radio3"} name={"radio3"} label={"Designer"}/>
                            <RadioButton id={"radio4"} name={"radio4"} label={"QA"}/>*/}
                             {loading ? <h2>Loading...</h2>
                            : error ? <h3>{error}</h3>
                                : positions.map(position => <RadioButton label={position.name} id={position.id} value={position.id} name={"radio1"} onChange={e=>positionHandler(e)}/>)}
                        </div>
                    {/*<FileInput id={"fileInput1"}/>*/}
                    <input type="file" style={{position:"relative", top:"47px"}} onChange={e => photoHandler(e)}/>
                    <Button text={"Sign up"} type={"submit"} styles={!formValid ? "disabledButton" : "button"} id={"button1"} disabled={!formValid ? "disabled" : ""} style={{position:'absolute', top:"100px"}}/>
                </form>
                </div>
            <br/>
            <Button text={"Sign up"} type={"submit"} style={!formValid ? "disabledButton" : "button"} id={"button1"} disabled={!formValid ? "disabled" : ""}/>
        </div>
    );
};

export default Form;