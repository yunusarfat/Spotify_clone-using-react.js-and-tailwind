import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/playerContext'

export default function Player() {
  const {track,seekbg,seekbar,playStatus,play,pause,time,previous,next,seekSong}=useContext(PlayerContext);
  return (
    <div className='h[10%] bg-black  text-white flex px-3 '>
      <div className=' hidden md:block lg:flex gap-4 items-center '>
        <img className=' w-12' src={track.image} alt=""/>
        <div>
          <p>{track.name}</p>
          <p> {track.desc.slice(0,12)}</p>

        </div>

      </div>
      <div className='mt-28 mb-5 flex flex-col gap-1 m-auto items-center'>
        <div className='gap-4 flex'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=""/>
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt=""/>
          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt=""/>
          {playStatus
          ?<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt=""/>
        :  <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt=""/>}
         
          
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=""/> 
          
        </div> 
        <div className='items-center gap-3 flex '>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div onClick={seekSong} ref={seekbg} className=' w-[60vw] max-w-[500px] bg-gray-200 rounded-full'>
            <hr ref={seekbar} className='h-1 w-0 rounded-full border-none bg-green-800'></hr>

          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>

      </div>
       <div className='mt-28 mb-5 hidden lg:flex opacity-60  items-center gap-2'>
        <img className='w-4' src={assets.play_icon} alt="" />
        <img className='w-4' src={assets.mic_icon} alt=""/>
        <img className='w-4' src={assets.queue_icon} alt="" />
        <img className='w-4' src={assets.speaker_icon} alt="" />
        <img className='w-4' src={assets.volume_icon} alt="" />
        <div className='bg-slate-50 w-20 rounded h-1'>

       </div>
        <img className='w-4' src={assets.mini_player_icon} alt="" />
        <img className='w-4' src={assets.volume_icon} alt="" />



       </div>



       

      
    </div>
  )
}
