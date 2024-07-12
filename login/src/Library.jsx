import React from 'react'
import Sidebar from './Sidebar'
import Display from './Display'
import Player1 from './Player1'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Library = () => {
  return (
    <div className='h-screen bg-cover' style={{"backgroundImage":"url('../src/assets/bg-1.jpg')"}} >
    <div className='w-full h-screen backdrop-filter backdrop-blur-3xl'>
      <div className='h-screen flex'>
       
        <Sidebar />
      <div className='h-[85%] w-[75%] bg-black flex absolute ml-[25%] rounded-2xl opacity-85'>
      <div className='h-[95%] w-[97%] bg-[#121212] absolute m-4 rounded-xl'>
      <div className='mt-3 pl-4'>
            <button className='text-white p-2  bg-[#242424] rounded-2xl'><FaArrowLeft/></button>
            <button className='text-white p-2 ml-3  bg-[#242424] rounded-2xl'><FaArrowRight/></button>
            <h1 className='text-white font-semibold text-6xl pl-10 mt-2 '>Your Library</h1>
            {/* <input className='flex absolute ml-[38%] top-20 w-[35%] h-[7%] rounded-3xl text-white bg-[#242424] border caret-white '/>
            <IoMdSearch className='text-white absolute  ml-[69%] w-8 h-6 top-[88px] '/> */}
            

            <button className='absolute text-white ml-[80%] top-20 bg-[#484848] w-32 h-9 rounded-2xl '>Dark mode</button>
            <hr className='mt-5 mr-4'></hr>
            <div className='text-white ml-10 mt-10 flex flex-col gap-4'>
                <div className='flex gap-3'>
                <Link className='flex gap-3 ' to="/playlist"><BsPlusCircleFill  className='w-6 h-8' />
                <p className=' font-semibold text-lg mt-'>Create a playlist</p></Link>
                
                

                </div>
                <ul className='flex flex-col gap-3'>
                   
                </ul>
                
                

            </div>
            </div>

      </div>

      </div>
      
      <div className='w-[75%] flex  '>
      <Player1/>

      </div>
      </div>
    </div>
  </div>

  )
}

export default Library
