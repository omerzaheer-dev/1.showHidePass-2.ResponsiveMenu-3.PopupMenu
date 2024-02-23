import React, { useState } from 'react'
import Inp from './Inp'
import useCurrencyInfo from './Hawk'

const CurrencyConverter = () => {
    const [amount,setAmount]=useState(0)
    const [from,setFrom]=useState("usd")
    const [to,setTo]=useState("inr")
    const [convertedAmount,setConvertedAmount]=useState(0)

    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)
    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }
    const convert = () => {
        setConvertedAmount(amount*currencyInfo[to])
    }
  return (
    <div className='w-full h-screen bg-cover flex justify-center items-center bg-no-repeat' style={{backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,}}>
        <div className='backdrop-blur-md md:w-[40%] w-[82%] mx-auto h-fit border-white border-[1px] md:p-3 p-2 rounded-sm'>
            <form onSubmit={(e)=>{e.preventDefault();
            convert()
            }}>
                <div className='mb-2'>
                     <Inp label="From : " amount={amount} selectedCurrency={from} currencyOptions={options} onCurrencyChange={(currency)=>setAmount(amount)}></Inp>
                </div>
                <div className='relaive'>
                    <button type='button' onClick={swap} className='absolute md:left-[50%] left-[47%] -translate-x-[50%] -translate-y-[50%] md:px-5 py-1 px-2 text-center text-xl md:text-2xl font-medium md:font-semibold rounded-md bg-[blue] text-white border-white border-[1px] '>swap</button>
                </div>
                <div>
                    <Inp  amount={convertedAmount} selectedCurrency={to} currencyOptions={options} onCurrencyChange={(currency)=>setAmount(amount)}></Inp>
                </div>
                    <button className='bg-[blue] p-1 w-full mt-2 mb-2 text-white font-medium md:font-semibold text-xl'>Convert Currency</button>
                    
            </form>
        </div>
    </div>
  )
}

export default CurrencyConverter
