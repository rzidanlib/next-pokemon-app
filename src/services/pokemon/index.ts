import axios from "axios";

const pokeApi = process.env.NEXT_PUBLIC_POKE_API_URL;

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

interface PokemonDetail {
  id: number;
  name: string;
  image: string;
  weight: string;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
}

export const getData = async (
  limit: number,
  offset: number
): Promise<Pokemon[]> => {
  try {
    const response = await axios.get(
      `${pokeApi}/pokemon?limit=${limit}&offset=${offset}`
    );
    const pokemonData = await Promise.all(
      response.data.results.map(async (result: any) => {
        const detailsResponse = await axios.get(result.url);
        const pokemon: Pokemon = {
          id: detailsResponse.data.id,
          name: detailsResponse.data.name,
          image: detailsResponse.data.sprites.front_default,
        };
        return pokemon;
      })
    );
    return pokemonData;
  } catch (error) {
    throw new Error("Error fetching Pokémon data");
  }
};

export const getDetailPokemon = async (
  id: number
): Promise<PokemonDetail | {}> => {
  try {
    const response = await axios.get(`${pokeApi}/pokemon/${id}`);
    const data = await response.data;

    const pokemonData: any = {
      id: data.id,
      name: data.name,
      weight: data.weight,
      image: data.sprites.front_default,
      abilities: data.abilities.map((ability: any) => ability.ability.name),
      types: data.types.map((type: any) => type.type.name),
    };

    return pokemonData;
  } catch (error) {
    console.log("Error fetching data....", error);
    return {};
  }
};

export const getAllPokemonType = async () => {
  try {
    const response = await axios.get(`${pokeApi}/type`);
    const data = await response.data;
    const types = data.results.map((type: any) => type.name);
    return types;
  } catch (error) {
    console.error("Error fetching Pokémon types:", error);
    return [];
  }
};

export const getPokemonByType = async (typeName: any) => {
  try {
    const response = await axios(`${pokeApi}/type/${typeName.toLowerCase()}`);
    const data = await response.data;
    const pokemonOfType = data.pokemon.map((pokemon: any) => pokemon.pokemon);

    const pokemonData = await Promise.all(
      pokemonOfType.map(async (pokemon: any) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        return {
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.sprites.front_default,
        };
      })
    );

    return pokemonData;
  } catch (error) {
    console.error(`Error fetching Pokémon of type ${typeName}:`, error);
    return [];
  }
};
