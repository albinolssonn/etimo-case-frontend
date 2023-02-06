import React, { useEffect, useState } from "react";
import "../colors.css";
import { getAllPokemons, getPokemonOnSearch } from "../functions/getFunctions";
import GridLayout from "../layout/GridLayout";
import ListLayout from "../layout/ListLayout";
import ListTopBar from "./ListTopBar";

const ListPage = () => {
  const [layoutToggle, setLayoutToggle] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [fetchUrl, setFetchUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  useEffect(() => {
    getAllPokemons(fetchUrl, setFetchUrl, setAllPokemons);
  }, []);

  const nextPokemonHandler = () => {
    getAllPokemons(fetchUrl, setFetchUrl, setAllPokemons);
  };

  const searchHandler = () => {
    getPokemonOnSearch(searchInput, setSearchResult);
  };

  const resetHandler = () => {
    setSearchResult([]);
  };

  return (
    <div className="main-content">
      <ListTopBar
        layoutToggle={layoutToggle}
        setLayoutToggle={setLayoutToggle}
        setSearchInput={setSearchInput}
        searchResult={searchResult}
        searchHandler={searchHandler}
        resetHandler={resetHandler}
      />

      {layoutToggle ? (
        <GridLayout
          allPokemons={allPokemons}
          nextPokemonHandler={nextPokemonHandler}
          searchResult={searchResult}
        />
      ) : (
        <ListLayout
          allPokemons={allPokemons}
          nextPokemonHandler={nextPokemonHandler}
          searchResult={searchResult}
        />
      )}
    </div>
  );
};

export default ListPage;
