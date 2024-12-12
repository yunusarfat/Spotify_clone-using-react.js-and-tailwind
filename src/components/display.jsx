import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from "./Displayhome.jsx"
import Displayalbum from './displayalbum.jsx'
import { albumsData } from '../assets/assets.js'



const Display = () => {
  
  return (
    <div className='w-[100%] bg-black m-2 px-6 pt-4 rounded text-white '>
        <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<Displayalbum/>}  />
        </Routes>
      
    </div>
  ) 
}

export default Display
