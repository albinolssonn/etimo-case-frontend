import React, { useEffect, useState } from "react";
import "../colors.css";
import GridLayout from "../layout/GridLayout";
import ListLayout from "../layout/ListLayout";
import ListTopBar from "./ListTopBar";

const ListPage = ({
  allPokemons,
  getAllPokemons,
  setSearchInput,
  getPokemonOnSearch,
  searchResult,
  resetHandler,
}) => {
  const [layoutToggle, setLayoutToggle] = useState(false);

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="main-content">
      <ListTopBar
        layoutToggle={layoutToggle}
        setLayoutToggle={setLayoutToggle}
        setSearchInput={setSearchInput}
        getPokemonOnSearch={getPokemonOnSearch}
        searchResult={searchResult}
        resetHandler={resetHandler}
      />

      {layoutToggle ? (
        <GridLayout
          allPokemons={allPokemons}
          getAllPokemons={getAllPokemons}
          searchResult={searchResult}
        />
      ) : (
        <ListLayout
          allPokemons={allPokemons}
          getAllPokemons={getAllPokemons}
          searchResult={searchResult}
        />
      )}
    </div>
  );
};

export default ListPage;
