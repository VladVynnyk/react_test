import React, {useEffect, useState} from 'react';
import classes from './Cards.module.scss';
import Button from "../UI/Button/Button";
import photo from "./photo-cover.svg";
import Card from "../UI/Cards/Card";
import {useDispatch, useSelector} from "react-redux";
import {userListAction} from "../../actions/requestsActions";

const  Cards = () => {
    let [pages, setPages] = useState(1);

    let dispatch = useDispatch()
    const usersReducer = useSelector(state => state.usersReducer)
    const {loading, users, error, totalPages} = usersReducer

    useEffect(()=>{
        dispatch(userListAction(pages))
    }, [dispatch])

    function clickHandler(){
        let page =0;
        page = pages;
        page+=1;
        if(totalPages<=pages){
            console.log("Last page")
            dispatch(userListAction(totalPages))
        }
        else{
            setPages(pages += 1)
            console.log(pages)
            dispatch(userListAction(pages))}

    }
    return (
        <div className={classes.container}>
            <div className={classes.title}>Working with GET request</div>
            <div className={classes.cardsContainer}>
                <div className={classes.cards}>
                    {loading ? <h2>Loading...</h2>
                        : error ? <h3>{error}</h3>
                            : users.map(user => (<Card className={classes.card} key={user.id} photo={user.photo} name={user.name} description={user.position} email={user.email} phoneNumber={user.phone}/>))}
                </div>

            </div>
        <Button text={"Show more"} styles={totalPages<=pages ? "disabledButton" : "button"} disabled={totalPages<=pages ? "disabled" : ""} click={clickHandler}></Button>
        </div>
    );
};

export default Cards;
