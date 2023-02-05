import React from "react";
import PokeBtnComponent from "../components/PokeBtnComponent";
import PokeRow from "../components/PokeRow";

const ListLayout = ({ allPokemons, getAllPokemons }) => {
  return (
    <div className="pokemon-list">
      <div className="list-container">
        {allPokemons
          .sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id)
          .map((pokemon, key) => {
            return (
              <PokeRow
                pokemon={pokemon}
                key={key}
              />
            );
          })}
      </div>
      <div className="btn-container">
        <PokeBtnComponent
          btnAction={getAllPokemons}
          btnText={"More Pokemons!"}
        />
      </div>
    </div>
  );
};

export default ListLayout;
