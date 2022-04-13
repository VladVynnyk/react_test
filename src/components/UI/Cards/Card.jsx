import React from 'react';
import classes from "./Card.module.scss";
const Card = ({photo, name, description, phoneNumber, email}) => {
    return (
        <div className={classes.card}>
            <div className={classes.content}>
                <img src={photo} alt={classes.portrait}/>
                <div className={classes.name}>{name}</div>
                <div className={classes.description}>{description}</div>
                <div className={classes.hovertext} data-hover={email}>{email}</div>
                <div className={classes.phoneNumber}>{phoneNumber}</div>
            </div>
        </div>
    );
};

export default Card;