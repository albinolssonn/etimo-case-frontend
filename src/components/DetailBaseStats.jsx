import React from "react";

const DetailBaseStats = ({ pokemon }) => {
  return (
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
  );
};

export default DetailBaseStats;
