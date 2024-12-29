import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {

  return (
    <div className="w-[100%] flex overflow-x-auto gap-2 p-3">
      {data.map((d, i) => (
        <Link to={`/${d.media_type || title}/details/${d.id}`}
          style={{
            background:
              "linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9))",
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
          key={i}
          className="min-w-[15%] h-[50vh] bg-red-200 rounded-md p-2 text-white mb-10"
        >
          <img
            className="w-full h-[45%] object-cover mb-2"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            })`}
            alt=""
          />
          <h1 className="font-bold text-xl">
            {" "}
            {d.name || d.title || d.original_title}
          </h1>
          <p className="text-zinc-400">
            <span className="text-bold text-zinc-100">Overview:-</span>
            {d.overview.slice(0, 50)}
            <span className="text-blue-400">...more</span>
          </p>
          <h3>
            <i className="ri-movie-2-fill"></i> {d.media_type}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;
