import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  console.log(data);

  return (
    <div className="w-[full] flex flex-wrap gap-5 items-center justify-center mt-[5%]">
      {data.map((c, i) => (
        <Link
          key={i}
          className="relative w-[30vh] mr-[5%] mb[5%]  shadow-[7px_16px_32px_rgba(0,0,0,.5)] "
        >
          <img
            className=" h-[40vh] rounded mr-10 object-cover"
            src={
              `https://image.tmdb.org/t/p/w500/${
                c.backdrop_path || c.profile_path
              }` || noimage.png
            }
            alt=""
          />
          <h1 className=" top-[60%] left-[2%] text-2xl font-semibold text-zinc-100">
            {c.name || c.original_name || c.title.slice(0, 30)}
          </h1>
          
          <div className="absolute right-[-10%] bottom-[30%] bg-yellow-700 w-[7vh] h-[7vh] flex justify-center items-center rounded-full">
             <h1 className="text-xl font-semibold ">{(c.vote_average*10).toFixed()}</h1><sup>%</sup>
          </div>

        </Link>
      ))}
    </div>
  );
};

export default Cards;
