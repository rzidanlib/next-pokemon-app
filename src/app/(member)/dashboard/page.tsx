/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data: session }: { data: any } = useSession();
  const userId = session.user._id;
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/user?id=${userId}`);
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (user === null) {
      fetchUser();
    }
  }, []);

  return (
    <>
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            User Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Role : {user?.role}
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Full name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user?.fullname}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user?.email}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              My Pokemon
            </h2>
          </div>
          <ul role="list" className="grid gap-4 sm:grid-cols-2 xl:col-span-2">
            {user?.pokemons.length > 0 ? (
              user?.pokemons.map((pokemon: any) => (
                <li
                  key={pokemon.id}
                  className="border border-gray-200 rounded-md p-2 hover:shadow"
                >
                  <div className="flex items-center gap-x-3">
                    <img
                      className="w-20"
                      src={pokemon.image}
                      alt={pokemon.name}
                    />
                    <div>
                      <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                        {pokemon.name.toUpperCase()}
                      </h3>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <h1>Pokemon tidak ada.</h1>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
