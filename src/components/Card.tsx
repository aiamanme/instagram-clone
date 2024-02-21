import { useEffect, useState } from "react";

function Card({ tasks }: any) {
  const [quotes, setQuotes] = useState<any>();

  useEffect(() => {
    fetch("https://animechan.xyz/api/random")
      .then((response) => response.json())
      .then((quote) => setQuotes(quote));
    // setQuotes({
    //   anime: "Naruto",
    //   character: "Naruto Uzumaki",
    //   quote:
    //     "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be.",
    // });
  }, []);

  return (
    <div
      id="main-cart"
      className="bg-neutral-950 h-max
    rounded-2xl w-72 p-6 shadow-xl shadow-[#000000] transition-all"
    >
      <div
        id="main-cart-top"
        className="flex justify-start gap-4 font-semibold text-xl items-center"
      >
        <img
          className="h-auto w-16 rounded-full border-4 border-[#9c82f8]"
          src="https://e1.pxfuel.com/desktop-wallpaper/390/105/desktop-wallpaper-dark-anime-boy-aesthetic-icons-dark-anime-icons.jpg"
          alt="aman"
        />
        <h1>aiaman</h1>
      </div>
      <div id="main-cart-buttom">
        <div className="flex justify-between mt-4">
          <button className="flex justify-between gap-2 hover:bg-neutral-800 py-[0.4rem] px-[0.7rem] rounded-lg">
            <span className="material-symbols-outlined">edit</span> Profile
          </button>
          <button
            className="flex justify-between gap-2 hover:bg-neutral-800 py-[0.4rem] px-[0.7rem] rounded-lg"
            onClick={() => {
              window.open("https://github.com/aiamanme", "_blank");
            }}
          >
            <span className="material-symbols-outlined">share</span> Github
          </button>
        </div>
        <h1 className="font-bold text-xl mt-4 mb-[3.60rem]">
          Today's progress :
        </h1>
        <h3 className="text-gray-400 font-bold">{`${tasks.length} / ${
          tasks.filter((task: { state: any }) => task.state).length
        }`}</h3>
        <h1 className="text-4xl font-semibold">
          {Math.floor(
            ((tasks.filter((task: { state: any }) => task.state).length /
              tasks.length) *
              100) |
              0
          )}
          %
        </h1>
        <div className="border-4 bg-transparent my-2 rounded-2xl h-12 border-gray-500 transition-all">
          <div
            className="h-full bg-[#fbe6a2] rounded-xl transition-all"
            style={{
              width: `${
                ((tasks.filter((task: { state: any }) => task.state).length /
                  tasks.length) *
                  100) |
                0
              }%`,
            }}
          ></div>
        </div>
        <div
          id="quote"
          className="mt-4 max-h-20 overflow-auto bg-neutral-900 rounded-xl p-[0.4rem]"
        >
          {`${quotes?.quote} - ${quotes?.character} (${quotes?.anime})`}
        </div>
      </div>
    </div>
  );
}

export default Card;
