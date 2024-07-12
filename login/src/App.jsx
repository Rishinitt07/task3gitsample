import React from 'react'
import Login from './Login'
import Register from './Register'
import Dashboarditems from './Dashboarditems'
import Home from './Home'
import Artistacc from './Artistacc'
import "./App.css"
import { Route,Routes } from 'react-router-dom'
import Search from './Search'
import Library from './Library'
import Playlist from './Playlist'



const App = () => {
  return (
    <div>
      

    
   
      
        
      
      <Routes>
      
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='' element={<Dashboarditems/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='artist' element={<Artistacc/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='library' element={<Library/>}/>
        <Route path='playlist' element={<Playlist/>}/>
        

      </Routes>
      
      
    
    </div>
  )
}

export default App

