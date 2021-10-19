import React from "react";
import { useState, useEffect } from "react";
import { API_HUMAN } from "../api/rickandmortyapi";
import Character from "../components/Character";
import Loading from "../components/Loading";
import { Typography, TextField } from "@material-ui/core";

function CharacterList() {
  let [characters, setCharacters] = useState(null);
  let [searchTerm, setSearchTerm] = useState(null);

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

  if (!characters) {
    return <Loading />;
  }

  return (
    <div className="container">
      <Typography variant="h2">Rick and Morty Characters</Typography>
      <TextField
        label="Search by character name"
        variant="outlined"
        fullWidth
        margin="dense"
        color="primary"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="row">
        {characters
          .filter((value) => {
            if (searchTerm == null) {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((character) => {
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
