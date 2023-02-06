import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

const DetailHeader = ({ pokemon }) => {
  const navigate = useNavigate();

  // if (pokemon.id) {
  return (
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
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      </div>
    </div>
  );
};
// };

export default DetailHeader;
