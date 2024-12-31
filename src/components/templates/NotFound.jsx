import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className='absolute top-0 left-0 bg-[rgba(0,0,0,.8)] w-screen h-screen flex items-center justify-center'>
                <i
          onClick={() => {
            navigate(-1);
          }}
          className="hover:text-[#6556cd] text-white text-2xl  ri-close-fill absolute top-[5%] right-[5%]"
        ></i>
       <h1 className='text-5xl text-white font-black'>Page Not Found</h1>
    </div>
  )
}

export default NotFound
