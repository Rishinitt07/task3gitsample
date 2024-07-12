import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Display = () => {
  return (
    <div className='h-[80%] flex bg-[#121212] opacity-'>
        <div className='h-[95%] w-[97%] bg-[#121212] m-3 absolute rounded-xl'>
            
            <div className='mt-3 pl-4'>
            <button className='text-white p-2  bg-[#242424] rounded-2xl'><FaArrowLeft/></button>
            <button className='text-white p-2 ml-3  bg-[#242424] rounded-2xl'><FaArrowRight/></button>
            <h1 className='text-white font-semibold text-6xl pl-10 mt-2 '>Home</h1>
            <button className='absolute text-white ml-[80%] top-16 bg-[#484848] w-32 h-9 rounded-2xl '>Dark mode</button>
            <hr className='mt-5 mr-4'></hr>
            <div className='w-[98%] h-48 bg-[#484848] mt-5 rounded-xl '>
                
            </div>
            <div className='w-[98%] h-48 bg-[#484848] mt-3 rounded-xl '>
                
            </div>

            </div>
        </div>
        
    
    </div>
  )
}

export default Display
