import React from 'react'
import {assets} from '../assets/assets.js'



export default function Sidebar() {
  return (
    <div className=' hidden md:block w-[25%] h-full text-white'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div className='cursor-pointer gap-3 pl-8 flex items-center'>
                <img className='w-5' src={assets.home_icon} alt=''/>
                <p className='font-bold'>Home</p>

            </div>
            <div className='flex pl-8 items-center cursor-pointer gap-3'>
                <img className='w-6' src={assets.search_icon} alt='' />
                <p className='font-bold'>
                    search
                    
                </p>

            </div>


        </div>

        <div className='bg-[#121212] h-[85%] rounded'>
            <div className='p-4 justify-between items-center flex'>
                <div className='flex  gap-3 items-center'>
                    <img className='w-8' src={assets.stack_icon} alt=""/>
                    <p className='font-semibold'>Your library</p>

                </div>
                <div className='gap-3 items-center flex'>
                    <img  className='w-5' src={assets.arrow_icon} alt="" />
                    <img  className='w-5' src={assets.plus_icon} alt="" />
                  </div>

            </div>
            <div className='bg-[#242424] m-2 rounded font-semibold flex-col p-4 '>
                <h1 className='text-blue-100 font-bold'>Create your first playlist</h1>
                <p className='font-light'>it's easy we help you</p>
                <button className='text-[15px] px-4 py-1.5 bg-white text-black rounded-full mt-4 '>Create playlist</button>

            </div>
            <div className='bg-[#242424] m-2 rounded font-semibold flex-col p-4 '>
                <h1 className='font-bold text-blue-100'>Let's find some poscasts to follow</h1>
                <p className='font-light'>you will get update</p>
                <button className='text-[15px] px-4 py-1.5 bg-white text-black rounded-full mt-4 '>browse podcasts</button>

            </div>

         
            
        </div>
        

      
    </div>
  )
}
