import { addDataIntoCache } from "./cache";

export const getPokemonOnSearch = async (searchInput, setSearchResult) => {
  const fetchUrl = `https://pokeapi.co/api/v2/pokemon/${searchInput}/`;
  const res = await fetch(fetchUrl);
  const data = await res.json();
  addDataIntoCache("API-call-Search", fetchUrl, fetchUrl);
  setSearchResult(data);
};

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
