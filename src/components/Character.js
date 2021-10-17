import React from "react";
import { useHistory } from "react-router-dom";

function Character({ character }) {
  let { id, name, image } = character;
  let history = useHistory();

  return (
    <div className="card black character" onClick={() => history.push(`${id}`)}>
      <div>
        <img src={image} alt={name} />
      </div>
      <strong className="green-text">{name}</strong>
    </div>
  );
}

export default Character;
