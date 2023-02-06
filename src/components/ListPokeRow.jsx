import React from "react";
import { useNavigate } from "react-router-dom";
import { searchIcon } from "../functions/icons";

const ListPokeRow = ({ pokemon, key }) => {
  const navigate = useNavigate();

  return (
    <div
      className="pokemon-row"
      key={key}
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
              id="poke-ball"
            />
            <p id="row-name">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </p>

            <p>{pokemon.id}</p>
          </div>

          <div className="top-content-holder">
            <img
              className="type_icon"
              src={searchIcon(pokemon.types[0].type.name)}
              height={"20px"}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="poke-row-content">
        <div
          className="row-img-container"
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
        </div>
        <div className="row-stats-container">
          {pokemon.stats.map((poke) => {
            return (
              <div className="stat-values">
                <p>{poke.stat.name}</p>
                <h2>{poke.base_stat}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListPokeRow;
