import { useRef, useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const lastNameRef=useRef(null);


function handleFocusLastName() {
  lastNameRef.current.focus();
}

const handleShowData = useCallback(()=> {
    alert(`FirstName:${firstName},LastName:${lastName}`);
},[firstName, lastName]);

return (
  <>
  <div>
    <input type="text"
    placeholder="First Name"
    value={firstName}
    onChange={(e)=> setFirstName(e.target.value)}

    />
  </div>

<div>
    <input type="text"
    placeholder="Last Name"
    ref={lastNameRef}
    value={lastName}
    onChange={(e)=> setLastName(e.target.value)}

    />
  </div>
  <div style={{marginTop:'10px'}}>
    <button onClick={handleFocusLastName}> Focus Last Name</button>
    <button onClick={handleShowData}> Show Data </button>
  </div>
  </>
);
}