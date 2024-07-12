import React from 'react'
import { HiHome } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { LuLibrary } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-[25%] bg-[#000000] h-full p-2 flex-col gap-2 text-white rounded-xl opacity-80 lg:flex'>
        <div className='bg-[#121212] h-[20%] rounded-xl flex flex-col justify-around '>
            <div className='flex items-center gap-3 pl-10 cursor-pointer  '>
            <HiHome className='h-10 w-6'/>
            <p className='font-semibold text-xl '><Link to="/home">Home </Link></p>

            </div>
            <div className='flex items-center gap-3 pl-6 ml-3 mb-2 cursor-pointer  '>
            <IoMdSearch className=' w-7 h-10'/>
            <p className=' text-xl font-semibold'><Link to="/search">Search</Link></p>

            </div>

        </div>
        <div className='h-[80%] bg-[#121212] rounded-xl'>
          <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3 pl-6 cursor-pointer'>
              <LuLibrary className='w-7 h-9'/>
              <p className='text-xl font-semibold'>Your library</p>

            </div>
            <div className='flex justify-between gap-5 cursor-pointer'>
              <Link to="/library"><FaArrowRight/></Link>
              <Link to="/playlist"><FaPlus /></Link>
            </div>
            
          </div>
          <div className='flex flex-col gap-3'>

          
          <div className='h-36 w-[95%] bg-[#242424] rounded-2xl ml-2 flex flex-col items-start pl-8  justify-start pt-7 font-semibold '>
            <h1 className='text-xl   font-bold'>Create your First Playlist</h1>
            <p className=' mt-2  text-lg font-thin '>Its  easy it will help you</p>
            <button className=' mt-2 bg-black w-36 h-9 rounded-3xl'><Link to="/playlist">Create Playlist</Link></button>

            </div>
          
          <div className='h-36 w-[95%] bg-[#242424] rounded-2xl ml-2 flex flex-col items-start pl-8  justify-start pt-7 font-semibold '>
            <h1 className='text-xl   font-bold'>Lets Find some podcasts</h1>
            <p className=' mt-2  text-lg font-thin '>will keep on update on new podcasts</p>
            <button className=' mt-2 bg-black w-36 h-9 rounded-3xl'>Browse Podcasts</button>

            </div>
          
            </div>


        </div>
        
      
    </div>
  )
}


export default Sidebar

