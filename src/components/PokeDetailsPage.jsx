import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { searchIcon } from "../functions/icons";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { addDataIntoCache } from "../functions/cache";

const PokeDetailsPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [stepperValue, setStepperValue] = useState(1);
  const navigate = useNavigate();
  const cacheName = "API-call-single";

  useEffect(() => {
    getPokemonOnID();
  }, []);

  const getPokemonOnID = async () => {
    const fetchUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    try {
      const res = await fetch(fetchUrl);
      const data = await res.json();
      addDataIntoCache(cacheName, fetchUrl, fetchUrl);

      setPokemon(data);
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
                  <div className="button-container">
                    <button
                      id={
                        stepperValue === 1
                          ? "stepper-btn-active"
                          : "stepper-btn"
                      }
                      onClick={() => setStepperValue(1)}
                    >
                      Pokemon Info
                    </button>
                    <button
                      id={
                        stepperValue === 2
                          ? "stepper-btn-active"
                          : "stepper-btn"
                      }
                      onClick={() => setStepperValue(2)}
                    >
                      Abilities
                    </button>
                    <button
                      id={
                        stepperValue === 3
                          ? "stepper-btn-active"
                          : "stepper-btn"
                      }
                      onClick={() => setStepperValue(3)}
                    >
                      Battle Moves
                    </button>
                  </div>
                </div>

                <div className="info-content">
                  {stepperValue === 1 && (
                    <>
                      {pokemon.id && (
                        <div className="stepper-content">
                          <h3>Pokemon Info</h3>
                          <div className="info-list">
                            <div className="content-row">
                              <p>Base Experience</p>
                              <p>{pokemon.base_experience}</p>
                            </div>

                            <div className="content-row">
                              <p>Height</p>
                              <p>{pokemon.height} dm</p>
                            </div>

                            <div className="content-row">
                              <p>Weight</p>
                              <p>{pokemon.weight} hg</p>
                            </div>

                            <div className="content-row">
                              <p>Family Order</p>
                              <p>{pokemon.order} </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {stepperValue === 2 && (
                    <>
                      {pokemon.id && (
                        <div className="stepper-content">
                          <h3>Abilities</h3>
                          <div className="info-list">
                            {pokemon.abilities.map((ab) => {
                              return (
                                <div className="content-row">
                                  <p>{ab.ability.name}</p>
                                  <p>Slots: {ab.slot}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {stepperValue === 3 && (
                    <>
                      {pokemon.id && (
                        <div className="stepper-content">
                          <h3>Moves</h3>
                          <div className="info-list">
                            {pokemon.moves
                              .sort(
                                (move1, move2) =>
                                  move1.version_group_details[0]
                                    .level_learned_at -
                                  move2.version_group_details[0]
                                    .level_learned_at
                              )
                              .map((mo) => {
                                return (
                                  <div className="content-row">
                                    <p>{mo.move.name}</p>
                                    <p>
                                      Learned at lvl
                                      {
                                        mo.version_group_details[0]
                                          .level_learned_at
                                      }
                                    </p>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokeDetailsPage;
