import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards'

const Tvshows = () => {
    document.title = "React | TvShows"
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [TvShow, setTvshow] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
     
    const getTvshow = async () => {
        try {
          const { data } = await axios.get(`/tv/${category}?page=${page}`);
          if(data.results.length >0){
            setTvshow((prevstate)=>[...prevstate,...data.results])
            setpage(page + 1)
          console.log(data);
          } else {
            sethasMore(false)
          }
          
        } catch (error) {
          console.log("Error", error);
        }
      };
    
     const refreshTvshow = async()=>{
      if(TvShow.length === 0) {
        getTvshow()
      } else {
        setpage(1)
        setTvshow([])
        getTvshow()
      }
     }
    
    
      useEffect(() => {
        refreshTvshow()
      }, [category]);
    
  return  TvShow.length > 0 ? (
    <div className="w-screen h-full text-white p-10  overflow-hidden overflow-y-hidden">
      <div className="flex items-center gap-1 ">
   
        <h1 className="w-[20%] text-3xl text-zinc-400  font-semibold ">
        <i onClick={()=>{
          navigate(-1)
        }} className="hover:text-[#6556cd] text-2xl   ri-arrow-left-line"></i>
          TvShows<spna className="text-sm ml-2 text-zinc-500">({category.toUpperCase()})</spna>
        </h1>
        
        <Topnav />
        <Dropdown
          title="Name"
          options={["popular","top_rated","airing_today"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
       
      </div>
  <InfiniteScroll 
   dataLength={TvShow.length}
   next={getTvshow}
   hasMore={hasMore}
   loader={<h1>Loading</h1>}
  >
  <Cards data={TvShow} title="Popular" />
  </InfiniteScroll>
    </div>
  ) : (
    <h1>loading</h1>
  );
}

export default Tvshows
