import React, { useContext } from 'react'
import Navbar from './navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/playerContext';


function Displayalbum() {
    const {id}=useParams();
    const albumData=albumsData[id];
    const {playWithId}=useContext(PlayerContext)
    
    let hours=2+Number(id/5);
    let mint=30*Number(id);
  
    if(mint>=60)
    {
        hours+=Math.floor(mint/60);
        mint=mint%60;
    }
    if(Number(id)%2)
    {
        mint+=15;
    }
    else{
        mint+=11;
    }
  return (
    <>
    <Navbar/>
    <div className='flex mt-10 gap-8 md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col'>
            <p className='font-semibold'>Playlist</p>
            <h2 className='text-5xl font-bold'>{albumData.name}</h2>
            <h3 className='mt-5 font-semibold'>{albumData.desc}</h3>
            <p className='flex gap-3 mt-2'>
                <img className='inline-block w-7' src={assets.spotify_logo} alt="" />
                <b>Spotify</b>
                ⦁ 1,23,333 Likes
                ⦁ <p>{Number(id)+1} songs</p>
                ⦁  <span>{hours} hr {mint} mint</span>
            </p>
        </div>
         
    
    </div>
    <div className='pl-2  mt-10  grid grid-cols-3 sm:grid-cols-4'>
        <p><b className='mr-4' >#</b> Title</p>

        <p>Album</p>
        <p>Date Added</p>
        <img className=' m-auto w-4' src={assets.clock_icon} alt="" />

    </div>
    <hr/>
    {
      
      songsData.map((item,index)=>
    (
        <div onClick={()=>playWithId(item.id)} key={index} className='p-2 hover:bg-[#ffffff26] grid grid-cols-3 sm:grid-cols-4'>
            <p>
                <b className='mr-4'>{index+1}</b>
                <img className='inline-block w-12' src={item.image} alt="" />
                <b className=' p-10'>{item.name}</b>
            </p>
            <p className=''>
                {albumData.name}

            </p>
            <p className='text-[15px] hidden sm:block'>5 days ago</p>
            <p className='text-[15px] text-center' >{item.duration}</p>
       

        </div>
    ))
    
}

     
    </>
  )
}

export default Displayalbum
