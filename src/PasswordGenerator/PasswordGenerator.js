import React, { useCallback, useEffect, useState , useRef } from 'react'

const PasswordGenerator = () => {
    const [length , setLength] = useState(8);
    const [numAllowed , setNumAllowed] = useState(false);
    const [charAllowed , setCharAllowed] = useState(false);
    const [password , setPassword] = useState("");

    //useRef Hook
    const passwordRef = useRef(null)

    const PasswordGen = useCallback(()=>{
        let pass = ""
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(numAllowed) str+= "0123456789";
        if(charAllowed) str+= "!@#$%^&*()-_=+{}[]':;/?.>,<|`~";
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random()* str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass);
    },[length,numAllowed,charAllowed,setPassword])

    const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(0,3);
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{
        PasswordGen();
    },[length,numAllowed,charAllowed,PasswordGen,setPassword])
  return (
    <div className='bg-black text-white w-[100vw] h-[100vh] relative'>
        <div className='bg-[blue] md:w-[65%] w-[85%] md:p-3 p-2 absolute top-11 left-[50%] translate-x-[-50%]'>
            <h1 className='md:font-bold font-semibold text-2xl text-center mt-1 mb-3 md:my-3 md:text-3xl'>Password Generator</h1>
            <div className=' flex justify-center gap-[3%]'>
                <input type="text" readOnly value={password} ref={passwordRef} placeholder='Password' className='bg-[coral] placeholder:text-blue-200 outline-none md:px-2 md:py-1 py-[0.6%] px-2 rounded-md text-xl md:font-semibold font-medium w-[75%] md:w-[75%]'/>
                <button onClick={copyPasswordToClipboard} className='text-xl md:font-bold font-semibold rounded-md bg-[coral] w-[25%] md:w-[20%]'>Copy</button>
            </div>
            <div className='flex flex-col ml-2 md:flex-row mt-4 md:gap-7 gap-2'>
                <div className='flex justify-start items-center md:gap-5 gap-2'>
                    <input type="range" min="6" max="60" value={length} onChange={(e)=>{setLength(e.target.value)}} className='cursor-pointer accent-[coral] md:w-[15vw] w-[50vw]'/>
                    <label className='md:text-xl text-base md:font-bold font-semibold'>Length: {length}</label>
                </div>
                <div className='flex justify-start items-center md:gap-7 gap-4'>
                    <div className='md:gap-3 gap-2 flex items-center'>
                        <label className='md:text-xl text-base md:font-bold font-semibold'>Numbers</label>
                        <input type="checkbox" defaultChecked={numAllowed} onChange={()=> { setNumAllowed((prev) => !prev) }} className='accent-[coral] md:w-4 md:h-4 mt-1 md:mt-0 w-3 h-3' />
                    </div>
                    <div className='flex md:gap-3 gap-2 items-center'>
                        <label className='md:text-xl text-base md:font-bold font-semibold'>SpecialCharacters</label>
                        <input type="checkbox" defaultChecked={charAllowed} onChange={()=> { setCharAllowed((prev) => !prev) }} className='accent-[coral] md:w-4 md:h-4 mt-1 md:mt-0 w-3 h-3' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PasswordGenerator
