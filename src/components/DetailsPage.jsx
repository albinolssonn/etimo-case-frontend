import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailHeaderComponent from "./DetailHeader";
import DetailTopBar from "./DetailTopBar";
import DetailBaseStats from "./DetailBaseStats";
import DetailInfoStepper from "./DetailInfoStepper";
import { getPokemonOnID } from "../functions/getFunctions";

const DetailsPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [stepperValue, setStepperValue] = useState(1);

  useEffect(() => {
    getPokemonOnID(id, setPokemon);
  }, []);

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
