import React from "react";

const PokeBtnComponent = ({ btnAction, btnText }) => {
  return (
    <button
      onClick={btnAction}
      id="main-btn"
    >
      {btnText}
    </button>
  );
};

export default PokeBtnComponent;
