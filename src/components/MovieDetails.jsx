import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncmovieload, removemovie } from "../store/actions/movieActions";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { id } = useParams();
  
  
 
  useEffect(() => {
    dispatch(asyncmovieload(id));

    return () => {
      dispatch(removemovie());
    };
  }, []);
  const movie = useSelector((state) => state.movie.info);
  console.log("Movie details from Redux:", movie);
  
  return (
    <div className="w-full h-screen">
      <nav>
        <i
          onClick={() => {
            navigate(-1);
          }}
          className="hover:text-[#6556cd] text-2xl  ri-arrow-left-line"
        ></i>
      </nav>
    </div>
  );
};

export default MovieDetails;
