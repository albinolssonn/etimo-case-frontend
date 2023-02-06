import { addDataIntoCache } from "./cache";

// function for fetching single pokemon based on search
export const getPokemonOnSearch = async (searchInput, setSearchResult) => {
  try {
    const fetchUrl = `https://pokeapi.co/api/v2/pokemon/${searchInput}/`;
    const res = await fetch(fetchUrl);
    const data = await res.json();
    addDataIntoCache("API-call-Search", fetchUrl, fetchUrl);
    setSearchResult(data);
  } catch (error) {
    console.log(error.message);
  }
};

// Function for fetching all the pokemon based on the limitations in endpoint
export const getAllPokemons = async (fetchUrl, setFetchUrl, setAllPokemons) => {
  const res = await fetch(fetchUrl);
  const data = await res.json();

  addDataIntoCache("API-Call-AllPokemon", fetchUrl, fetchUrl);

  setFetchUrl(data.next);

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
};

// Function for single fetch of Pokemon based on ID
export const getPokemonOnID = async (id, setPokemon) => {
  const fetchUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  try {
    const res = await fetch(fetchUrl);
    const data = await res.json();
    addDataIntoCache("API-call-single", fetchUrl, fetchUrl);

    setPokemon(data);
  } catch (error) {
    console.log(error);
  }
};
