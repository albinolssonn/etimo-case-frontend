import React from "react";

const ListPokeBtn = ({ btnAction, btnText }) => {
  return (
    <button
      onClick={btnAction}
      id="main-btn"
    >
      {btnText}
    </button>
  );
};

export default ListPokeBtn;
