import React from "react";
import ListPokeCard from "../components/ListPokeCard";
import ListPokeBtn from "../components/ListPokeBtn";

const GridLayout = ({ allPokemons, nextPokemonHandler, searchResult }) => {
  console.log(searchResult);

  return (
    <div className="pokemon-grid">
      {searchResult.length !== 0 ? (
        <div className="grid-container">
          <ListPokeCard pokemon={searchResult} />
        </div>
      ) : (
        <>
          <div className="grid-container">
            {allPokemons
              .sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id)
              .map((pokemon, key) => {
                return (
                  <ListPokeCard
                    pokemon={pokemon}
                    key={key}
                  />
                );
              })}
          </div>

          <div className="btn-container">
            <ListPokeBtn
              btnAction={nextPokemonHandler}
              btnText={"More Pokemons!"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GridLayout;
