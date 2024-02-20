import { FaStar } from "react-icons/fa";

export function AnimeCards({ animes }) {
  return (
    <div className="mt-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {animes.map((anime) => {
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

export function Loading() {
  return (
    <div
      className="text-black mt-10 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}

export function Error() {
  return (
    <div role="alert">
      <div className="bg-red-700 text-white font-bold rounded-t px-4 py-2 ">
        Error
      </div>
      <div className="border border-t-0 border-red-600 rounded-b bg-red-200 px-4 py-3 text-red-900">
        <p>Something not ideal might be happening.</p>
      </div>
      <img src="https://www.cinco8.com/wp-content/uploads/2020/08/404-768x576.png" alt="" />
    </div>
  );
}
