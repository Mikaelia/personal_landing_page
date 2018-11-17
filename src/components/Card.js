import React from "react";
import "../sass/_card.scss";

const Card = props => (
  <div className="card">
    <img className="card__image" src={props.image} alt="card background" />
    <h3 className="card__header">{props.title}</h3>
    <p className="card__text">{props.text}</p>
  </div>
);

export default Card;
