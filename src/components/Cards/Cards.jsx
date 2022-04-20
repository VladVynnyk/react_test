import React, {useEffect, useState} from 'react';
import classes from './Cards.module.scss';
import Button from "../UI/Button/Button";
import photo from "./photo-cover.svg";
import Card from "../UI/Cards/Card";
import {useDispatch, useSelector} from "react-redux";
import {userListAction} from "../../actions/requestsActions";

const  Cards = () => {
    let [pages, setPages] = useState(1);

    /*let dispatch = useDispatch();
    let screenReducer = useSelector(state => state.screenReducer)
    const {mobileScreenData, tabletScreenData, laptopScreenData, desktopScreenData} = screenReducer*/

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

        /*const {data} = fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${pages}&count=6`)
            .then(function(response)
                { return response.json(); })
            .then(function(data)
                { console.log(data);
        if(data.success) { }   // process success response }
            else { // proccess server errors } })
            }})
        if(data.success === false){
            dispatch(userListAction(pages-1))
        }
        else dispatch(userListAction(pages))*/
    }
    return (
        <div className={classes.container}>
            <div className={classes.title}>Working with GET request</div>
            <div className={classes.cardsContainer}>
                <div className={classes.cards}>
                    {/*{window.innerWidth >= 360 && window.innerWidth<=768 ? mobileScreenData.users.map(card => (<Card className={classes.card} photo={photo} name={card.username} description={card.description} email={card.email} phoneNumber={card.phone}></Card>))
                    : window.innerWidth>=768 && window.innerWidth<=1024 ? tabletScreenData.users.map(card => (<Card className={classes.card} photo={photo} name={card.username} description={card.description} email={card.email} phoneNumber={card.phone}></Card>))
                            : window.innerWidth>=1024 && window.innerWidth <= 2055 ? laptopScreenData.users.map(card => (<Card className={classes.card} photo={photo} name={card.username} description={card.description} email={card.email} phoneNumber={card.phone}></Card>))
                                :desktopScreenData.users.map(card => (<Card className={classes.card} photo={photo} name={card.username} description={card.description} email={card.email} phoneNumber={card.phone}></Card>))}*/}
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
