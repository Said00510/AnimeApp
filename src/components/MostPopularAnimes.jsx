import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { mostPopularAnime } from "./services/populars.js";

export function PopularAnimeCards() {
    const[popularAnimes, setPopularAnimes] = useState([])

    useEffect(() => {
            async function fetchData(){
                const data = await mostPopularAnime();
                console.log(data)
                setPopularAnimes(data)
            }
            fetchData()
    },[])

  return (
    <div className="mt-4">
      <h1 className="font-bold text-3xl text-center my-4">MOST POPULAR ANIMES!</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularAnimes.map((anime) => {
          return (
            <li
              className="transition-transform duration-300 transform hover:scale-105 cursor-pointer bg-white rounded-xl h-[500px] w-[250px] flex flex-col p-2 justify-around"
              key={anime.id}
            >
              <div className="mx-auto">
                <img
                  className="object-cover rounded-lg h-[315px] w-[225px]"
                  src={anime.backdrop}
                  alt={anime.title}
                />
              </div>

              <div className="">
                <small className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {anime.episodes ? anime.episodes : 0} Episodes
                </small>
                <p className="w-[80%] truncate text-lg text-gray-900 font-medium title-font">
                  {anime.title}
                </p>
              </div>

              <div>
                <p className="leading-relaxed text-base">
                  {anime.synopsis
                    ? anime.synopsis.slice(0, 50) + "..."
                    : "No found text"}
                </p>
              </div>

              <div className="flex justify-end">
                <span className="flex justify-center items-center">
                  {anime.score ? `${anime.score}` : "No score"}
                  <span className="flex items-center text-yellow-500">
                    {anime.score ? <FaStar /> : ""}
                  </span>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}