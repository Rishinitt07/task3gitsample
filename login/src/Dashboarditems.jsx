import React from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className='bg-cover text-white h-screen w-full' style={{"backgroundImage":"url('../src/assets/bg-1.jpg')"}}>
      <div className='w-full h-screen backdrop-filter backdrop-blur-xl'>
        <div className='absolute'>
          <div className='h-32 w-32 bg-cover ml-3 mt-0'style={{"backgroundImage":"url('../src/assets/dunes-1.png')"}}>
          <div className='absolute mt-12 ml-32 text-6xl'>
            tunes
          </div>
          

          </div>
        </div>
      <div className='flex gap-8 justify-end pt-16 pr-5 '>
      <Link to="/register"> <button className='border-none p-2 bg-slate-700 rounded-3xl'>Click to Register</button></Link>
      <Link to="/login"><button className='border-none p-2 bg-slate-700 rounded-3xl  '> Click to Login</button></Link>
      <Link to="/artist"> <button className='border-none p-2 bg-slate-700 rounded-3xl'> Click to Register to Artist account</button></Link>
    </div>
    <hr className='mt-2 w-[97%] ml-6'></hr>
    
   

      </div> 
      
       

    </div>
    
     

    
    
  )
}

export default Dashboard
