import React from "react";
import ListPokeBtn from "../components/ListPokeBtn";
import ListPokeRow from "../components/ListPokeRow";

const ListLayout = ({ allPokemons, getAllPokemons }) => {
  return (
    <div className="pokemon-list">
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
          btnAction={getAllPokemons}
          btnText={"More Pokemons!"}
        />
      </div>
    </div>
  );
};

export default ListLayout;
