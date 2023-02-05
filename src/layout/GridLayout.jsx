import React from "react";
import PokeBtnComponent from "../components/PokeBtnComponent";
import PokeCard from "../components/PokeCard";

const GridLayout = ({ allPokemons, getAllPokemons }) => {
  return (
    <div className="pokemon-grid">
      <div className="grid-container">
        {allPokemons
          .sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id)
          .map((pokemon, key) => {
            return (
              <PokeCard
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

export default GridLayout;
