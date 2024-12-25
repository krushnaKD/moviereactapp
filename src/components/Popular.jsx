import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards';

const Popular = () => {
     document.title = "React | Popular"
    const navigate = useNavigate();
    const [category, setcategory] = useState("tv");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
     
    const getpopular = async () => {
        try {
          const { data } = await axios.get(`/${category}/popular?page=${page}`);
          if(data.results.length >0){
            setpopular((prevstate)=>[...prevstate,...data.results])
            setpage(page + 1)
          console.log(data);
          } else {
            sethasMore(false)
          }
          
        } catch (error) {
          console.log("Error", error);
        }
      };
    
     const refreshpopular = async()=>{
      if(popular.length === 0) {
        getpopular()
      } else {
        setpage(1)
        setpopular([])
        getpopular()
      }
     }
    
    
      useEffect(() => {
        refreshpopular()
      }, [category]);
    

  return popular.length > 0 ? (
    <div className="w-screen h-full text-white p-10  overflow-hidden overflow-y-hidden">
      <div className="flex items-center gap-1 ">
   
        <h1 className="w-[20%] text-3xl text-zinc-400 font-semibold ">
        <i onClick={()=>{
          navigate(-1)
        }} className="hover:text-[#6556cd] text-2xl  ri-arrow-left-line"></i>
          Popular<spna className="text-sm ml-2 ">({category.toUpperCase()})</spna>
        </h1>
        
        <Topnav />
        <Dropdown
          title="Name"
          options={["movie", "tv"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
       
      </div>
  <InfiniteScroll 
   dataLength={popular.length}
   next={getpopular}
   hasMore={hasMore}
   loader={<h1>Loading</h1>}
  >
  <Cards data={popular} title="Popular" />
  </InfiniteScroll>
    </div>
  ) : (
    <h1>loading</h1>
  );
}

export default Popular
