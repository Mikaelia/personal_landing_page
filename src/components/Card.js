import React from "react";
import "../sass/_card.scss";

const Card = props => (
  <div className={"card " + props.class}>
    <img className="card__image" src={props.image} alt="card background" />
    <h3 className="card__text">{props.title}</h3>
  </div>
);

export default Card;
