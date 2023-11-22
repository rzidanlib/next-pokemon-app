/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="px-[110px]">
        {/* Navbar Section */}
        <nav className="bg-white py-[20px]">
          <div className="max-w-screen-xl flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/img/pokeball.png"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Journeys
              </span>
            </Link>

            <Link
              href="/register"
              className="p-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative rounded-2xl h-[520px] bg-hero-img bg-cover">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-7">
            <div className="p-4 px-8 bg-yellow-300  text-white font-bold rounded-md">
              Explore with us
            </div>
          </div>
        </div>

        {/* Campaign Section */}
        <div className="grid grid-cols-2 gap-4 my-20 h-[520px]">
          <div className="flex flex-col justify-center items-start">
            <p className="text-[48px] mb-10 font-bold">Catch em all!</p>
            <p className="text-[28px]">
              Collect your Pokemon, and make them your best buddies.
            </p>

            <button className="flex mt-12 items-center bg-red-600 hover:bg-red-700 p-2 px-3 text-white border-2 border-black rounded-xl">
              <img
                src="/img/pokeball.png"
                alt="pokeball"
                className="w-8 mr-2"
              />
              <p className="text-lg font-semibold">Catch now</p>
            </button>
          </div>

          <div className="relative p-20 ml-14">
            <img
              src="/img/pikachu.jpg"
              alt="pikachu"
              className="h-80 rounded-lg border-4 border-yellow-300 absolute text-center top-0 bottom-0 bg-red-100"
            />
            <img
              src="/img/charizard.jpg"
              alt="pikachu"
              className="h-80 w-126 rounded-lg border-4 border-red-300 absolute mt-32 ml-44 text-center top-0 bottom-0 bg-red-100"
            />
          </div>
        </div>

        {/* Feature Section */}
        <div className="bg-blue-100 rounded-xl p-10 mb-10">
          <p className="text-3xl font-semibold mb-12">Your Starter Pack : </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white shadow-lg p-4 h-52 rounded-md border-2 border-white hover:border-red-500">
              <p className="text-lg font-semibold">6 Pokeballs</p>
              <div className="grid grid-cols-3 grid-rows-2 gap-4 my-2 place-items-center">
                <img
                  src="/img/pokeball_2.png"
                  alt="pokeballs"
                  className="w-12"
                />
                <img
                  src="/img/pokeball_2.png"
                  alt="pokeballs"
                  className="w-12"
                />
                <img
                  src="/img/pokeball_2.png"
                  alt="pokeballs"
                  className="w-12"
                />
                <img
                  src="/img/pokeball_2.png"
                  alt="pokeballs"
                  className="w-12"
                />
                <img
                  src="/img/pokeball_2.png"
                  alt="pokeballs"
                  className="w-12"
                />
                <img
                  src="/img/pokeball_2.png"
                  alt="pokeballs"
                  className="w-12"
                />
              </div>
            </div>

            <div className="bg-white shadow-lg p-4 h-52 rounded-md border-2 border-white hover:border-red-500">
              <p className="text-lg font-semibold">Trainer ID Card</p>
              <div className="flex justify-center">
                <img
                  src="/img/trainerid.png"
                  alt="idcard"
                  className="my-2 h-32"
                />
              </div>
            </div>

            <div className="bg-white shadow-lg p-4 h-52 rounded-md border-2 border-white hover:border-red-500">
              <p className="text-lg font-semibold">Pokedex</p>
              <div className="flex justify-center">
                <img
                  src="/img/pokedex.png"
                  alt="idcard"
                  className="my-2 h-32"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="text-center mt-10 mb-5">
          <p className="text-lg font-semibold text-gray-400">
            PokemonJourneys @2023
          </p>
        </footer>
      </div>
    </>
  );
}
