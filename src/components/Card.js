import React from "react";

const Card = props => (
  <div className={"card " + props.class} onClick={props.handleClick}>
    <img
      className="card__image"
      src={props.image}
      alt="card background"
      category={props.title}
    />
    <h3 className="card__text">{props.title}</h3>
  </div>
);

export default Card;
