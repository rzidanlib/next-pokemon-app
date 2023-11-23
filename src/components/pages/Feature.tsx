export default function FeatureSection() {
  return (
    <div className="rounded-xl p-10 mb-10">
      <p className="text-3xl font-semibold mb-12">Your Starter Pack : </p>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow-lg p-4 h-52 rounded-md border-2 border-white hover:border-red-500">
          <p className="text-lg font-semibold">6 Pokeballs</p>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 my-2 place-items-center">
            <img src="/img/pokeball_2.png" alt="pokeballs" className="w-12" />
            <img src="/img/pokeball_2.png" alt="pokeballs" className="w-12" />
            <img src="/img/pokeball_2.png" alt="pokeballs" className="w-12" />
            <img src="/img/pokeball_2.png" alt="pokeballs" className="w-12" />
            <img src="/img/pokeball_2.png" alt="pokeballs" className="w-12" />
            <img src="/img/pokeball_2.png" alt="pokeballs" className="w-12" />
          </div>
        </div>

        <div className="bg-white shadow-lg p-4 h-52 rounded-md border-2 border-white hover:border-red-500">
          <p className="text-lg font-semibold">Trainer ID Card</p>
          <div className="flex justify-center">
            <img src="/img/trainerid.png" alt="idcard" className="my-2 h-32" />
          </div>
        </div>

        <div className="bg-white shadow-lg p-4 h-52 rounded-md border-2 border-white hover:border-red-500">
          <p className="text-lg font-semibold">Pokedex</p>
          <div className="flex justify-center">
            <img src="/img/pokedex.png" alt="idcard" className="my-2 h-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
