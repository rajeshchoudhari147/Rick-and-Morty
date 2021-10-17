import React from "react";

function Character({ character }) {
  let { id, name, image } = character;

  return (
    <div className="card black character">
      <div>
        <img src={image} alt={name} />
      </div>
      <strong className="green-text">{name}</strong>
    </div>
  );
}

export default Character;
