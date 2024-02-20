import "./App.css";
import { Header } from "./components/Header.jsx";
import { useAnime } from "./hooks/useAnime.js";
import { AnimeCards, Error, Loading } from "./components/AnimeCards.jsx";
// import { AnimeCards } from "./AnimeCards";
import { useState } from "react";
import { PopularAnimeCards } from "./components/MostPopularAnimes.jsx";

function App() {
  const [value, setValue] = useState("");
  const { getAnimes, loading, anime} = useAnime({ value });

  const handleSubmit = (event) => {
    event.preventDefault();
    getAnimes({ value });
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (newValue.startsWith(" ")) return;
    setValue(newValue);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <Header
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={value}
      />
      <main>
        {loading ? <Loading /> : <AnimeCards animes={anime} />}
        {anime.length < 1 ? <PopularAnimeCards /> : " "}
      </main>
    </div>
  );
}

export default App;
