import React from "react";
import "./TitleCard.css";

const TitleCard = props => (
    <div className="jumbotron">
            <br></br>
            <span><h2>Clicky Game</h2> Current Score: {props.score} | High Score: {props.highScore} </span>
            <br></br>
            <br></br>
            <p>{props.message}</p>
    </div>
);

export default TitleCard;
