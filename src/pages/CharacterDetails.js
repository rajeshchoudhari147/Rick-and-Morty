import React from "react";
import { useEffect, useState } from "react";
import { BASE_API } from "../api/rickandmortyapi";
import Loading from "../components/Loading";
import CharDetailsContainer from "../components/CharDetailsContainer";

function CharacterDetails({ match }) {
  let { id } = match.params;
  let [charDetails, setCharDetails] = useState(null);

  useEffect(() => {
    try {
      fetch(`${BASE_API}/${id}`).then((response) =>
        response
          .json()
          .then((result) => setCharDetails(result))
          .catch((error) => console.log(error))
      );
    } catch (error) {
      console.log(error);
    }
  });

  if (!charDetails) {
    return <Loading />;
  }

  return <CharDetailsContainer key={id} character={charDetails} />;
}

export default CharacterDetails;
