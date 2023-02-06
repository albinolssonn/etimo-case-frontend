import React from "react";
import ListPokeCard from "../components/ListPokeCard";
import ListPokeBtn from "../components/ListPokeBtn";

const GridLayout = ({ allPokemons, getAllPokemons }) => {
  return (
    <div className="pokemon-grid">
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
          btnAction={getAllPokemons}
          btnText={"More Pokemons!"}
        />
      </div>
    </div>
  );
};

export default GridLayout;
