import React from 'react'
import Sidebar from './Sidebar'
import Player1 from './Player1'
import Display from './Display'

const Home = () => {
  // document.addEventListener("contextmenu",function(event){
  //   alert("Inspecting the site is not allowed")
  //   event.preventDefault()
  // })
  return (
    
    <div className='h-screen bg-cover' style={{"backgroundImage":"url('../src/assets/bg-1.jpg')"}} >
      <div className='w-full h-screen backdrop-filter backdrop-blur-3xl'>
        <div className='h-screen flex'>
         
          <Sidebar />
        <div className='h-[85%] w-[75%] bg-black flex absolute ml-[25%] rounded-2xl opacity-85'>
        <Display/>

        </div>
        
        <div className='w-[75%] flex  '>
        <Player1/>

        </div>
        </div>
      </div>
    </div>

     
     
    
  )
}

export default Home
