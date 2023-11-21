"use client";

import { getDetailPokemon } from "@/services/pokemon";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

export default function PokemonDetailPage(props: any) {
  const { data: session }: { data: any } = useSession();
  const { params } = props;
  const { push } = useRouter();

  const [error, setError] = useState("");
  const [pokemon, setPokemon] = useState<Partial<PokemonDetail>>({});

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const pokemonDetail = await getDetailPokemon(Number(params.id));
        setPokemon(pokemonDetail);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemon();
  }, [params.id]);

  const handleAddPokemon = async () => {
    const userId = session.user._id;
    const pokemonData = {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image,
    };

    try {
      const res = await axios.post("/api/pokemon/addPokemon", {
        userId,
        ...pokemonData,
      });
      if (res.status === 200) {
        push("/pokemon");
      }
    } catch (error) {
      console.log("get pokemon error : ", error);
      setError("Pokemon sudah ada.");
    }
  };

  return (
    <>
      {error !== "" && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 md:flex-row md:max-w-xl"
          role="alert"
        >
          <span className="font-medium">Perhatian!</span> {error}
        </div>
      )}
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={pokemon.image}
          alt={pokemon.name}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pokemon.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {pokemon.weight}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {pokemon.types?.map((type: any) => (
              <span key={type}>{type}, </span>
            ))}
          </p>
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {pokemon.abilities?.map((ability: any, index: any) => (
              <li key={index}>{ability}</li>
            ))}
          </ul>
          <button
            onClick={handleAddPokemon}
            className="p-2 bg-blue-500 rounded-md text-white hover:bg-blue-600"
          >
            Add Pokemon
          </button>
        </div>
      </div>
    </>
  );
}
