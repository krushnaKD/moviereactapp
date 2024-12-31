import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import NotFound from './NotFound'

const Trailer = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.video)
    console.log(ytvideo);
    
  return ytvideo ? (
    <div className='absolute top-0 left-0 bg-[rgba(0,0,0,.8)] w-screen h-screen flex items-center justify-center'>
                <i
          onClick={() => {
            navigate(-1);
          }}
          className="hover:text-[#6556cd] text-white text-2xl  ri-close-fill absolute top-[5%] right-[5%]"
        ></i>
      <ReactPlayer
       height={600}
       width={1000}
      url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />
    </div>
  ) : <NotFound/>
}

export default Trailer
