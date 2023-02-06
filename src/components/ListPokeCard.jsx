import React from "react";
import { useNavigate } from "react-router-dom";
import { searchIcon } from "../functions/icons";

const ListPokeCard = ({ pokemon, key }) => {
  const navigate = useNavigate();

  return (
    <div
      key={key}
      className="pokemon-card"
      onClick={() => navigate(`/pokedetails/${pokemon.id}`)}
    >
      <div
        className="top-container"
        style={{
          background: `var(--bg-poke-color-dark-${pokemon.types[0].type.name})`,
        }}
      >
        <div className="top-container-content">
          <div className="top-content-holder">
            <img
              src="pokeball.png"
              height={"20px"}
              alt=""
            />
            <p>#{pokemon.id}</p>
          </div>

          <div className="top-content-holder">
            <p>
              {pokemon.stats[0].stat.name} {pokemon.stats[0].base_stat}
            </p>
            <img
              className="type_icon"
              src={searchIcon(pokemon.types[0].type.name)}
              height={"20px"}
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        className="intro-container"
        style={{
          background: `var(--bg-poke-color-light-${pokemon.types[0].type.name})`,
        }}
      >
        <img
          className="card__image"
          width={120}
          height={120}
          src={pokemon.sprites["front_default"]}
          alt=""
          loading="lazy"
        />
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      </div>
    </div>
  );
};

export default ListPokeCard;
