import React from "react";
import { useState, useEffect } from "react";
import { API_HUMAN, API_HUMAN_PAGE } from "../api/rickandmortyapi";
import Character from "../components/Character";
import Loading from "../components/Loading";
import PaginationComponent from "../components/PaginationComponent";
import { Typography, TextField } from "@material-ui/core";

function CharacterList() {
  let [characters, setCharacters] = useState(null);
  let [searchTerm, setSearchTerm] = useState(null);
  let [loading, setLoading] = useState(true);
  let [currentPageUrl, setCurrentPageUrl] = useState(API_HUMAN);
  let [nextPageUrl, setNextPageUrl] = useState();
  let [prevPageUrl, setPrevPageUrl] = useState();
  let [pages, setPages] = useState();

  useEffect(() => {
    try {
      const url = currentPageUrl;
      setLoading(true);

      const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results && Array.isArray(data.results)) {
          setCharacters(data.results);
          setLoading(false);
          setNextPageUrl(data.info.next);
          setPrevPageUrl(data.info.prev);
          setPages(data.info.pages);
        }
      };
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [currentPageUrl]);

  if (loading) {
    return <Loading />;
  }

  function nextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function prevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  function goToPage(num) {
    setCurrentPageUrl(`${API_HUMAN_PAGE}${num}`);
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
      <div>
        <PaginationComponent
          nextPage={nextPageUrl ? nextPage : null}
          prevPage={prevPageUrl ? prevPage : null}
          goToPage={goToPage}
          pages={pages}
        />
      </div>
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
