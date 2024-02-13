import React, { useState } from 'react'
import { citiesArray } from './TabData'
const System = () => {
  const [active,setActive]=useState();
  return (
    <div className='w-[100vw]'>
      <h1 className='text-center mt-[9%] font-bold text-2xl md:mt-[4%] md:text-4xl'>Tabing System</h1>
      <div className='w-[88vw] mx-auto mt-10'>
        <ul className='flex gap-5 font-medium md:text-xl md:gap-14 text-lg text-white'>
          {
            citiesArray.map((val,index)=>{
              return(
                <li onClick={()=>setActive(index) } className={`px-3 py-[0.6vh] md:px-6 md:py-2 rounded-md cursor-pointer ${active===index ? 'bg-indigo-950' : 'bg-[red]'} `}>{val.name}</li>
              )
            })
          }
        </ul>
        {
          active === undefined || isNaN(active)? '':<div className='mt-8 md:text-lg bg-indigo-950 text-white px-4 py-3 flex justify-center items-baseline'>
            <p>{citiesArray[active].history}  </p>
            <span  onClick={()=>setActive()} className='cursor-pointer ml-2 md:text-3xl text-2xl font-semibold'>&times;</span>
          </div>
        } 
      </div>
    </div>
  )
}

export default System
