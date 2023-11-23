export default function CampaignSection() {
  return (
    <div className="grid grid-cols-2 gap-4 my-20 h-[520px]">
      <div className="flex flex-col justify-center items-start">
        <p className="text-[48px] mb-10 font-bold">Catch em all!</p>
        <p className="text-[28px]">
          Collect your Pokemon, and make them your best buddies.
        </p>

        <button className="flex mt-12 items-center bg-red-600 hover:bg-red-700 p-2 px-3 text-white border-2 border-black rounded-xl">
          <img src="/img/pokeball.png" alt="pokeball" className="w-8 mr-2" />
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
  );
}
