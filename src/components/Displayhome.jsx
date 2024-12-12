import React from 'react'
import Navbar from './navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumitem from './albumitem'
import Songitem from './songitem'

function DisplayHome() {
  return (
    <>
      <Navbar/>
      <div className='m-1'>
        <h1 className='font-bold text-2xl my-5'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item,index)=>(<Albumitem key={index} id={item.id} name={item.name} desc={item.desc} image={item.image} />))}
          
        </div>
      </div>
      <div className='m-1'>
        <h1 className='font-bold text-2xl my-5'>Todays Biggest Hit</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item,index)=>(<Songitem key={index} id={item.id} name={item.name} desc={item.desc.slice(0,25)} image={item.image} />))}
          
        </div>
      </div>
    </>


    
  )
}

export default DisplayHome
