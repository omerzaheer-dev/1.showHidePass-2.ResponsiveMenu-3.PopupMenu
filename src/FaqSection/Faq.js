import React, { useState } from 'react'
import { questions } from './Questions'
const Faq = () => {
    const[currentId,setCurretId] = useState("")

    const Item = questions.map((questionItem , index)=>{
        const itemDetails = {
            questionItem,
            currentId,
            setCurretId
        }
        return(
            <FaqItem itemDetails={itemDetails} key={index}></FaqItem>
        )
    })
  return (
    <div className='md:mt-[7%] mt-[24%] min-h-[140vw]'>
        <h1 className='text-center md:text-4xl text-2xl font-bold text-[blue]'>Frequently Asked Questions (FAQs)</h1>
        <div className='w-[88%] md:w-[75%] m-auto md:mt-[4%] mt-[15%]'>
            {Item}
        </div>
    </div>
  )
}

const FaqItem = ({itemDetails})=>{
    const {setCurretId,currentId,questionItem} = itemDetails
    const {id,answer,question}= questionItem

    return (
        <div>
          <div className='md:mb-[1%] mb-[2%]'>
                    <div onClick={()=>currentId===id ?  setCurretId(""):setCurretId(id)} className=' flex justify-between bg-black text-white md:p-[2%] p-[4%]'>
                            <h2 className='md:text-xl font-semibold font-serif text-sm'>{question}</h2>
                            <div className=' font-bold md:text-2xl text-md cursor-pointer'>{currentId===id ? 'A' : 'V'}</div>
                    </div>
                        <p className={`m-[0%] duration-300 font-normal border-[black] border-2 text-xs md:text-base ${currentId===id ? 'py-[4%] px-[3.5%] md:p-[2.5%] lg:p-[2%] ': 'p-[0%] h-0 scale-y-0'}`}>
                           {answer}
                        </p>
            </div>
        </div>
    )
}

export default Faq
