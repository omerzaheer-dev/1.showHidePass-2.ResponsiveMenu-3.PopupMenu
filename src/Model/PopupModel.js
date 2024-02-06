import React, { useState } from 'react'

const PopupModel = () => {
    const [modelStatus,setModelStatus] = useState(false)
  return (
    <>
    <button className='fixed md:left-[85%] lg:left-[88%] left-[74%] top-[4%] md:px-3 md:py-2 lg:text-xl px-2 py-1 border-[black] lg:border-[0.17vw] border-[0.12vw] rounded-md text-white font-bold bg-[red]' onClick={()=>setModelStatus(true)}>Enquire</button>
    <div className={`w-[100%] h-[100%] bg-[#213168] fixed ${modelStatus ? 'block':'hidden'}`}  onClick={()=>setModelStatus(false)}></div>
    <div className={`lg:w-[32%] w-[69%] lg:h-[58%] h-[51%] bg-red-600 fixed left-[50%] translate-y-[-50%] ease-in-out duration-[0.3s] text-white translate-x-[-50%] ${modelStatus ? 'top-[50%]':'top-[-500%]'}`}>
        <h3 className='fixed left-[50%] translate-x-[-50%] top-2 lg:text-3xl text-[5vw] font-bold'>Enquire Now </h3> 
        <span className='fixed lg:left-[90%] left-[88%] lg:top-1  md:bottom-[86%] text-white lg:text-4xl text-[7vw] font-bold cursor-pointer' onClick={()=>setModelStatus(false)}>&times;</span>
    </div>
    </>
  )
}

export default PopupModel
