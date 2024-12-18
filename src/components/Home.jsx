import React, { useEffect, useState } from 'react'
import Sidenav from './templates/Sidenav'
import Topnav from './templates/Topnav'
import axios from '../utils/axios';
import Header from './templates/Header';

function Hone() {
  document.title = "React | Homepage"
   const [wallpaper, setwallpaper] = useState(null);
   const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata = data.results[(Math.random()*data.results.length).toFixed()]
      setwallpaper(randomdata)
    } catch (error) {
      console.log("Error", error);
    }
  };
  
    useEffect(() => {
    !wallpaper && getWallpaper();   
       }, []);

  return wallpaper ? (
  <>
    <Sidenav/>
    <div className='w-[80%] h-screen '>
      <Topnav/>
      <Header data={wallpaper}/>
    </div>
  </>
  ):<h1 className='text-gray-400 text-3xl text-center'>Loading..</h1>
}

export default Hone
