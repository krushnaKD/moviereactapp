
import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards'

const People = () => {
    document.title = "React | TvShows"
    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
     
    const getPerson = async () => {
        try {
          const { data } = await axios.get(`/person/${category}?page=${page}`);
          if(data.results.length >0){
            setperson((prevstate)=>[...prevstate,...data.results])
            setpage(page + 1)
          console.log(data);
          } else {
            sethasMore(false)
          }
          
        } catch (error) {
          console.log("Error", error);
        }
      };
    
     const refreshperson = async()=>{
      if(person.length === 0) {
        getPerson()
      } else {
        setpage(1)
        setperson([])
        getPerson()
      }
     }
    
    
      useEffect(() => {
        refreshperson()
      }, [category]);
      return  person.length > 0 ? (
        <div className="w-screen h-full text-white p-10  overflow-hidden overflow-y-hidden">
          <div className="flex items-center gap-1 ">
       
            <h1 className="w-[20%] text-3xl text-zinc-400  font-semibold ">
            <i onClick={()=>{
              navigate(-1)
            }} className="hover:text-[#6556cd] text-2xl   ri-arrow-left-line"></i>
              TvShows<spna className="text-sm ml-2 text-zinc-500">({category.toUpperCase()})</spna>
            </h1>
            
            <Topnav />
         
          </div>
      <InfiniteScroll 
       dataLength={person.length}
       next={getPerson}
       hasMore={hasMore}
       loader={<h1>Loading</h1>}
      >
      <Cards data={person} title="" />
      </InfiniteScroll>
        </div>
      ) : (
        <h1>loading</h1>
      );
}

export default People
