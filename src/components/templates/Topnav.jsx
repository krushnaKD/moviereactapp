import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState(null);
  console.log(searches);

  const getsearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getsearch();
  }, [query]);

  return (
    <div className="w-full h-[8vh] flex items-center justify-start ml-[15%] relative ">
      <i class="text-zinc-100 text-xl ri-search-2-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        type="text"
        placeholder="Enter movie Name"
        className="w-[50%] mx-2 bg-transparent p-5  outline-none text-xl text-zinc-200 rounded-md"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          class="text-zinc-100 text-xl ri-close-large-line"
        ></i>
      )}

      <div className="w-[50%] max-h-[50vh] absolute top-[93%] bg-zinc-200 rounded-md overflow-auto">
        {searches && searches.map((s, i) => (
          <Link className="hover:text-black hover:bg-zinc-300 duration-300 p-5 border-b-2 w-[100%] border-zinc-100 text-zinc-600 flex items-center justify-center font-semibold">
            <img src="" alt="" />
            <h1>{s.name||s.original_name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;