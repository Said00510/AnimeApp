import { CiSearch } from "react-icons/ci";
import { GiBleedingEye } from "react-icons/gi";

export function Header({handleSubmit, handleChange, value}) {

  return (
    <header className="sm:px-4 sm:py-2 px-2 py-1">
      <nav className="flex gap-2 sm:gap-4 sm:flex-row flex-col">
          <div className=" bg-[#999999] justify-center items-center sm:py-2 sm:px-4 py-1 px-2 rounded-xl flex gap-2">
            <span className="text-[#eee] text-3xl"><GiBleedingEye /></span>
            <h1 className="text-white font-bold">My Anime List</h1>
          </div>
          <form 
          onSubmit={(e) => handleSubmit(e)}
          className="flex bg-[#999999] rounded-xl">
            <input
              className="sm:w-[300px] max-w-full bg-transparent outline-none border-none h-full text-white px-2 py-3 sm:px-2 sm:py-1 placeholder-white"
              id="search"
              type="text"
              autoComplete="off"
              placeholder="Search Anime"
              onChange={(e) => handleChange(e)}
              value={value}
            />
            <button className="bg-[#eee] text-[#000] rounded-r-xl text-2xl" type="submit">
              <CiSearch />
            </button>
          </form>
      </nav>
    </header>
  );
}
