import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const TopBarContainer = ({ layoutToggle, setLayoutToggle }) => {
  return (
    <div className="topbar-container">
      <div className="topbar-content">
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
  );
};

export default TopBarContainer;
