import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import PokeDetailsPage from "./components/PokeDetailsPage";
import PokeListPage from "./components/PokeListPage";

function App() {
  // const [pokemon, setPokemon] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    console.log(allPokemons);
  };

  return (
    <div className="App">
      <Router>
        <div className="app">
          <HeaderComponent />
          <Routes>
            <Route
              path="/"
              element={
                <PokeListPage
                  allPokemons={allPokemons}
                  setAllPokemons={setAllPokemons}
                  getAllPokemons={getAllPokemons}
                />
              }
            />
            <Route
              path="/pokedetails/:id"
              element={
                <PokeDetailsPage
                  // pokemon={pokemon}
                  // getPokemonOnID={getPokemonOnID}
                  allPokemons={allPokemons}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
