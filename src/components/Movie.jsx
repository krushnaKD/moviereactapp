
import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards';
const Movie = () => {

    document.title = "React | Movies"
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [Movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
     
    const getmovie = async () => {
        try {
          const { data } = await axios.get(`/movie/${category}?page=${page}`);
          if(data.results.length >0){
            setmovie((prevstate)=>[...prevstate,...data.results])
            setpage(page + 1)
          } else {
            sethasMore(false)
          }
          
        } catch (error) {
          console.log("Error", error);
        }
      };
    
     const refreshmovie = async()=>{
      if(Movie.length === 0) {
        getmovie()
      } else {
        setpage(1)
        setmovie([])
        getmovie()
      }
     }
    
    
      useEffect(() => {
        refreshmovie()
      }, [category]);
    
  return  Movie.length > 0 ? (
    <div className="w-screen h-full text-white p-10  overflow-hidden overflow-y-hidden">
      <div className="flex items-center gap-1 ">
   
        <h1 className="w-[20%] text-3xl text-zinc-400  font-semibold ">
        <i onClick={()=>{
          navigate(-1)
        }} className="hover:text-[#6556cd] text-2xl   ri-arrow-left-line"></i>
          Movies<span className="text-sm ml-2 ">({category.toUpperCase()})</span>
        </h1>
        
        <Topnav />
        <Dropdown
          title="Name"
          options={["popular","top_rated","upcoming","now_playing"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
       
      </div>
  <InfiniteScroll 
   dataLength={Movie.length}
   next={getmovie}
   hasMore={hasMore}
   loader={<h1>Loading</h1>}
  >
  <Cards data={Movie} title="movie" />
  </InfiniteScroll>
    </div>
  ) : (
    <h1>loading</h1>
  );
}

export default Movie
