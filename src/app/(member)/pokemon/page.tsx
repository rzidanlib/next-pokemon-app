"use client";

import {
  getAllPokemonType,
  getData,
  getPokemonByType,
} from "@/services/pokemon";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonsType, setPokemonsType] = useState<Pokemon[]>([]);
  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getData();
        const pokemonTypes = await getAllPokemonType();
        setPokemons(pokemonData);
        setTypes(pokemonTypes);
        setLoading(false);
      } catch (error) {
        setError("Error fetching Pokémon data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectedTypes = async (e: any) => {
    const selectedType = e.target.value;
    setSelectedTypes(selectedType);

    try {
      const res = await getPokemonByType(selectedType);
      setPokemonsType(res);
    } catch (error) {
      console.error(`Error fetching Pokémon of type ${selectedType}:`, error);
      setPokemonsType([]);
    }
  };

  const pokemonList = selectedTypes === "" ? pokemons : pokemonsType;

  return (
    <div>
      <h1>Pokemon Page</h1>

      <div className="flex justify-between mt-4">
        <select
          value={selectedTypes}
          onChange={handleSelectedTypes}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
        >
          <option value={""}>Choose pokemon type</option>
          {types.map((type: string, index: any) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        <form className="w-80">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Find Pokemon..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-wrap justify-between mt-4">
        {pokemonList.length > 0 ? (
          pokemonList.map((data: any) => (
            <Link
              href={`/pokemon/detail/${data.id}`}
              key={data.id}
              className="w-60 text-center mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="rounded-t-lg w-full"
                src={data.image}
                alt={data.name}
              />
              <div className="p-2">
                <h5 className="my-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                  {data.name.toUpperCase()}
                </h5>
              </div>
            </Link>
          ))
        ) : (
          <h1 className="text-lg place-items-center">Tidak ada pokemon.</h1>
        )}
      </div>
    </div>
  );
}
