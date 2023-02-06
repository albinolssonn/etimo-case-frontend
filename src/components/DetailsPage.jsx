import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { addDataIntoCache } from "../functions/cache";
import DetailHeaderComponent from "./DetailHeader";
import DetailTopBar from "./DetailTopBar";
import DetailBaseStats from "./DetailBaseStats";
import DetailInfoStepper from "./DetailInfoStepper";

const DetailsPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [stepperValue, setStepperValue] = useState(1);
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

  if (pokemon.id) {
    return (
      <div className="detail-section">
        <DetailHeaderComponent pokemon={pokemon} />

        <div className="content-container">
          <DetailTopBar pokemon={pokemon} />

          <div className="info-grid-container">
            <DetailBaseStats pokemon={pokemon} />

            <DetailInfoStepper
              pokemon={pokemon}
              stepperValue={stepperValue}
              setStepperValue={setStepperValue}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default DetailsPage;
