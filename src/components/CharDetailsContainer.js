import React from "react";

function CharDetailsContainer({ character }) {
  let { id, image, name, status, origin, location, created, species } =
    character;

  function getDate(createdDate) {
    const date = new Date(createdDate);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;
    return displayDate;
  }

  return (
    <div className="container">
      <h2>
        {id}: {name}
      </h2>
      <hr />
      <div className="charDetails">
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <ul className="collection">
            <li className="collection-item">
              <strong>Species: </strong>
              {species}
            </li>
          </ul>
          <ul className="collection">
            <li className="collection-item">
              <strong>Status: </strong>
              {status}
            </li>
          </ul>
          <ul className="collection">
            <li className="collection-item">
              <strong>Origin: </strong>
              {origin.name}
            </li>
          </ul>

          <ul className="collection">
            <li className="collection-item">
              <strong>Location: </strong>
              {location.name}
            </li>
          </ul>
          <ul className="collection">
            <li className="collection-item">
              <strong>Date Created: </strong>
              {getDate(created)}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CharDetailsContainer;
