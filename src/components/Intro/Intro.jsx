import React from 'react';
import classes from './Intro.module.scss';
import Button from "../UI/Button/Button";
const Intro = () => {
    return (
        <div className={classes.intro}>
            <img src="./pexels-alexandr-podvalny-1227513.jpeg" alt="background" className={classes.background}/>
            <div className={classes.container}>
                <div className={classes.title}>Test assignment for front-end developer</div>
                <div className={classes.subtitle}>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world, of Front-End Development keeps evolving.</div>
                <Button text={"Sign up"} className={classes.button}></Button>
            </div>
        </div>
    );
};

export default Intro;