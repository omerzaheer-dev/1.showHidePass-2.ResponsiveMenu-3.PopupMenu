import React , {useId}  from 'react'

const Inp = (
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectedCurrency="usd",
  
) => {
  const amountInputId = useId()
  return (
    <div className='p-1 bg-white flex justify-end rounded-lg border-slate-600 border-[1px]'>
      <div className='w-1/2 flex flex-col ml-2'>
        <label htmlFor={amountInputId} className='text-slate-400'>{label}</label>
        <input id={amountInputId} type='number' value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} placeholder='Amount' className='py-1.5 bg-transparent font-medium md:font-semibold outline-none md:w-32 w-24' />
      </div>
      <div className='w-1/2 flex flex-col items-end mr-2'>
        <label className='text-slate-400'>Currency Type</label>
        <select value={selectedCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} className='outline-none bg-slate-200 md:w-[27%] w-[54%] mt-1 md:font-semibold font-medium py-1 px-1 cursor-pointer rounded-md'>
          {
            currencyOptions.map((currency)=>{
              return(
                <option value={currency} key={currency}>{currency}</option>
              )
            })
          }
        </select>
      </div>
    </div>
  )
}

export default Inp
