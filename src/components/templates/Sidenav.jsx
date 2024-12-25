import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Sidenav() {
      
   


  return (
    <div className="w-[20%] h-screen border-r-2 border-zinc-400 p-5">
      <h1 className="text-white text-2xl font-bold ">
        <i className=" text-[#6556CD] ri-tv-line mr-2"></i>
        <span className="text-xl">MoviesZilla.</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 gap-2">
        <h1 className="text-white font-semibold text-xl text-start mt-3 mb-1">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg">
          <i className=" mr-2 ri-fire-fill"></i> Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-2 ri-bard-fill"></i> Popular
        </Link>
        <Link 
          to="/movie"
        className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-2 ri-movie-2-fill"></i> Movies
        </Link>
        <Link 
         to="/tvshows"
        className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-2 ri-slideshow-3-fill"></i> Tv Shows
        </Link>
        <Link 
         to="/person"
        className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-2 ri-group-fill"></i> People
        </Link>
      </nav>
      <hr className="mt-2 mb-2"/>
      <nav className="flex flex-col text-zinc-400 gap-3">
      <h1 className="text-white font-semibold text-xl text-start  mt-2 mb-1">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg">
        <i className="mr-2 ri-information-line"></i> About
        </Link>
        <Link  className="hover:bg-[#6556CD] hover:text-white duration-300 p-5 rounded-lg">
        <i className="ri-contacts-line mr-2"></i> Contact
        </Link>
       
      </nav>
    </div>
  );
}

export default Sidenav;
