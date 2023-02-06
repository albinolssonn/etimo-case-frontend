import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PageHeader from "./components/PageHeader";
import DetailsPage from "./components/DetailsPage";
import ListPage from "./components/ListPage";
import { addDataIntoCache } from "./functions/cache";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();

    addDataIntoCache("API-calls-AllPokemons", loadPoke, loadPoke);

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
          <PageHeader />
          <Routes>
            <Route
              path="/"
              element={
                <ListPage
                  allPokemons={allPokemons}
                  setAllPokemons={setAllPokemons}
                  getAllPokemons={getAllPokemons}
                />
              }
            />
            <Route
              path="/pokedetails/:id"
              element={<DetailsPage />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
