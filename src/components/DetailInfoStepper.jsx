import React from "react";

const DetailInfoStepper = ({ pokemon, stepperValue, setStepperValue }) => {
  return (
    <div className="info-container">
      <div className="stepper-controller">
        <div className="button-container">
          <button
            id={stepperValue === 1 ? "stepper-btn-active" : "stepper-btn"}
            onClick={() => setStepperValue(1)}
          >
            Pokemon Info
          </button>
          <button
            id={stepperValue === 2 ? "stepper-btn-active" : "stepper-btn"}
            onClick={() => setStepperValue(2)}
          >
            Abilities
          </button>
          <button
            id={stepperValue === 3 ? "stepper-btn-active" : "stepper-btn"}
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
                        move1.version_group_details[0].level_learned_at -
                        move2.version_group_details[0].level_learned_at
                    )
                    .map((mo) => {
                      return (
                        <div className="content-row">
                          <p>{mo.move.name}</p>
                          <p>
                            Learned at lvl
                            {mo.version_group_details[0].level_learned_at}
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
  );
};

export default DetailInfoStepper;
