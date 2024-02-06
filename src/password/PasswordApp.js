import {useState} from "react"
function PasswordApp() {
  const [pStatus, setPstatus] = useState(false)
  return (
    <div className="App">
      <input type={pStatus ? 'text' : 'password'}></input>
      <button onClick={()=>{setPstatus(!pStatus)}}>
        {pStatus ? 'Hide' : 'Show'}
        </button>
    </div>
  );
}

export default PasswordApp;
