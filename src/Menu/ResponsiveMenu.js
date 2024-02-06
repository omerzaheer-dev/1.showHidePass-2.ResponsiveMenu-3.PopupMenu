import { useState } from 'react'
import './ResponsiveMenu.css'
const ResponsiveMenu = () => {
  const [menuStatus , setMenuStatus] = useState(false)
  return (
    <div>
      <button className='text-3xl left-[88%] absolute top-[2%] font-bold' onClick={()=>setMenuStatus(!menuStatus)}>
      {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
        <div className={`menu w-[80%] h-[100%] left-[-100%] fixed bg-[yellow] ease-out duration-[0.5s] ${menuStatus ? 'left-0':''}`}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Course</li>
            <li>Contact</li>
        </ul>
    </div>
    </div>
  )
}

export default ResponsiveMenu
