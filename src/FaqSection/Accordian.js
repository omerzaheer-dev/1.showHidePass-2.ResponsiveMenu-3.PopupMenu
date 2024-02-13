import React, { useState } from 'react'
import { questions } from './Questions'
const Accordian = () => {
  const [showAns,setShowAns] = useState("");
  // const [status,setStatus] = useState(false);
  return (
    <div>
      <div className='md:mt-[7%] mt-[24%] min-h-[140vw]'>
        <h1 className='text-center md:text-4xl text-2xl font-bold text-[blue]'>Frequently Asked Questions (FAQs)</h1>
        <div className='w-[88%] md:w-[75%] m-auto md:mt-[4%] mt-[15%]'>

            {questions.map((faqItems,index)=>{
                return(
                <div className='md:mb-[1%] mb-[2%]' key={index}>
                    <div onClick={()=>showAns===faqItems.id ?  setShowAns(""):setShowAns(faqItems.id)} className=' flex justify-between bg-black text-white md:p-[2%] p-[4%]'>
                            <h2 className='md:text-xl font-semibold font-serif text-sm'>{faqItems.question}</h2>
                            <div className=' font-bold md:text-2xl text-md cursor-pointer'>{showAns===faqItems.id ? 'A' : 'V'}</div>
                    </div>
                        <p className={`m-[0%] duration-300 font-normal border-[black] border-2 text-xs md:text-base ${showAns===faqItems.id ? 'py-[4%] px-[3.5%] md:p-[2.5%] lg:p-[2%] ': 'p-[0%] h-0 scale-y-0'}`}>
                           {faqItems.answer}
                        </p>
                </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Accordian
