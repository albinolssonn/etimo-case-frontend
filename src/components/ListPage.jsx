import React, { useEffect, useState } from "react";
import "../colors.css";
import GridLayout from "../layout/GridLayout";
import ListLayout from "../layout/ListLayout";
import ListTopBar from "./ListTopBar";

const ListPage = ({ allPokemons, getAllPokemons }) => {
  const [layoutToggle, setLayoutToggle] = useState(false);

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="main-content">
      <ListTopBar
        layoutToggle={layoutToggle}
        setLayoutToggle={setLayoutToggle}
      />

      {layoutToggle ? (
        <GridLayout
          allPokemons={allPokemons}
          getAllPokemons={getAllPokemons}
        />
      ) : (
        <ListLayout
          allPokemons={allPokemons}
          getAllPokemons={getAllPokemons}
        />
      )}
    </div>
  );
};

export default ListPage;
