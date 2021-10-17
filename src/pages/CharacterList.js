import React from "react";
import { useState, useEffect } from "react";
import { API_HUMAN } from "../api/rickandmortyapi";
import Character from "../components/Character";

function CharacterList() {
  let [characters, setCharacters] = useState(null);

  useEffect(() => {
    try {
      fetch(API_HUMAN)
        .then((response) => response.json())
        .then(({ results }) => {
          if (results && Array.isArray(results)) {
            setCharacters(results);
          }
        })
        .catch((error) => console.log(error));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="container">
      <h2>Characters</h2>
      <hr />
      <div className="row">
        {characters.map((character) => {
          return (
            <div className="col s12 m4 l3" key={character.id}>
              <Character key={character.id} character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;
