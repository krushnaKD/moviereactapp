import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  document.title = "React | Trending"
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      if(data.results.length >0){
        settrending((prevstate)=>[...prevstate,...data.results])
        setpage(page + 1)
      } else {
        sethasMore(false)
      }
      
    } catch (error) {
      console.log("Error", error);
    }
  };

 const refreshtrending = async()=>{
  if(trending.length === 0) {
    getTrending()
  } else {
    setpage(1)
    settrending([])
    getTrending()
  }
 }


  useEffect(() => {
    refreshtrending()
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-full text-white p-10  overflow-hidden overflow-y-hidden">
      <div className="flex items-center gap-1 ">
   
        <h1 className="w-[20%] text-3xl text-zinc-400 font-semibold ">
        <i onClick={()=>{
          navigate(-1)
        }} className="hover:text-[#6556cd] text-2xl  ri-arrow-left-line"></i>
          Trending<span className="text-sm ml-2 ">({category.toUpperCase()})</span>
        </h1>
        
        <Topnav />
        <Dropdown
          title="Name"
          options={["movie", "tv", "all"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
        <Dropdown
          title="Duration"
          options={["Day", "week"]}
          func={(e) => setduration(e.target.value)}
        />
      </div>
  <InfiniteScroll 
   dataLength={trending.length}
   next={getTrending}
   hasMore={hasMore}
   loader={<h1>Loading</h1>}
  >
  <Cards data={trending} title={duration} />
  </InfiniteScroll>
    </div>
  ) : (
    <h1>loading</h1>
  );
};

export default Trending;
