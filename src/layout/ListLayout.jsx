import React from "react";
import ListPokeBtn from "../components/ListPokeBtn";
import ListPokeRow from "../components/ListPokeRow";

const ListLayout = ({ allPokemons, nextPokemonHandler, searchResult }) => {
  return (
    <div className="pokemon-list">
      {searchResult.length !== 0 ? (
        <div className="list-container">
          <ListPokeRow pokemon={searchResult} />
        </div>
      ) : (
        <>
          <div className="list-container">
            {allPokemons
              .sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id)
              .map((pokemon, key1) => {
                return (
                  <ListPokeRow
                    pokemon={pokemon}
                    key={key1}
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

export default ListLayout;
