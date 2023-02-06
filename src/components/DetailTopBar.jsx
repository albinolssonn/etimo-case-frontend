import React from "react";
import { searchIcon } from "../functions/icons";

const DetailTopBar = ({ pokemon }) => {
  return (
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
  );
};

export default DetailTopBar;
