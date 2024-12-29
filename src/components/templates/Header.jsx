import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        }) `,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
      className="w-full h-[60vh] flex flex-col justify-end items-start p-[6%] select-none"
    >
      <h1 className="w-[60%] text-5xl text-gray-100  font-black">
        {data.name || data.original_title.slice(0, 30)}
      </h1>
      <p className="w-[60%] mt-3 text-gray-400 text-lg">
        {data.overview.slice(0, 200)}
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">...more</Link>
      </p>
      <h3 className="text-gray-300 mt-3 mb-4">
        In Cinemas :- <i className="ri-movie-2-fill"></i> {data.release_date || "Comming Soon"}
      </h3>
      <Link className="bg-[#6556CD] px-2 py-1 rounded-md shadow-lg text-gray-300 ">
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
