import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { searchIcon } from "../functions/icons";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const PokeDetailsPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [locationArea, setLocationArea] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemonOnID();
    getLocationArea();
  });

  const getPokemonOnID = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLocationArea = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/location-area/${id}/`);
      const data = await res.json();
      setLocationArea(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {pokemon.id && (
        <div className="detail-section">
          <div
            className="detail-header"
            style={{
              background: `linear-gradient(0deg, #fff 20%, var(--bg-poke-color-light-${pokemon.types[0].type.name}) 20%)`,
            }}
          >
            <div
              className="back-btn"
              onClick={() => navigate("/")}
            >
              <ArrowBackIosNewIcon />
              <p>Back</p>
            </div>
            <div className="detail-header-card">
              <img
                className="card__image"
                width={300}
                height={300}
                src={pokemon.sprites["front_default"]}
                alt=""
                loading="lazy"
              />
              <h2>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </h2>
            </div>
          </div>

          <div className="content-container">
            <div className="topbar-container">
              <div className="detail-topbar-content">
                <div className="top-content-holder">
                  <img
                    src="/pokeball.png"
                    height={"20px"}
                    alt=""
                  />
                  <p>#{pokemon.id}</p>
                </div>

                <div className="top-content-holder">
                  <p>
                    {pokemon.types[0].type.name.charAt(0).toUpperCase() +
                      pokemon.types[0].type.name.slice(1)}
                    pokemon
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

            <div className="info-grid-container">
              <div className="base-stat-container">
                {pokemon.stats.map((poke, key) => {
                  return (
                    <div
                      className="stat-holder"
                      key={key}
                    >
                      <p>{poke.stat.name}</p>
                      <div
                        className="number-circle"
                        style={{
                          background: `var(--bg-poke-color-light-${pokemon.types[0].type.name})`,
                        }}
                      >
                        <h2>{poke.base_stat}</h2>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="info-container">
                <div className="stepper-controller">
                  <button>Location</button>
                  <button>Berries</button>
                  <button>Battle Moves</button>
                </div>
                {locationArea && (
                  <>
                    <h1>{locationArea.name}</h1>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokeDetailsPage;
