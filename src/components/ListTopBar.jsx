import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const ListTopBar = ({
  layoutToggle,
  setLayoutToggle,
  setSearchInput,
  searchResult,
  resetHandler,
  searchHandler,
}) => {
  // Eventually function with localstorage keep track of the user choise in this section

  // const layoutHandler = () => {
  //   if (layoutToggle === false) {
  //     setLayoutToggle(true);
  //     localStorage.setItem("layoutToggle", true);
  //   } else {
  //     setLayoutToggle(false);
  //     localStorage.setItem("layoutToggle", false);
  //   }
  // };

  return (
    <div className="topbar-container">
      <div className="topbar-content">
        <div className="search-container">
          <input
            id="search-input"
            type="text"
            placeholder="Name on pokemon..."
            onChange={(event) => {
              setSearchInput(event.target.value.toLowerCase());
            }}
          />
          <button
            id="search-btn"
            onClick={() => searchHandler()}
          >
            Search
          </button>
          {searchResult.length !== 0 && (
            <button
              id="reset-btn"
              onClick={() => resetHandler()}
            >
              Reset
            </button>
          )}
        </div>
        <div className="layout-container">
          <div
            className="grid-option-btn"
            id={!layoutToggle ? "active" : ""}
          >
            <FormatListBulletedIcon onClick={() => setLayoutToggle(false)} />
          </div>
          <div
            className="grid-option-btn"
            id={layoutToggle ? "active" : ""}
          >
            <GridViewIcon onClick={() => setLayoutToggle(true)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTopBar;
