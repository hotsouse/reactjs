import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormikForm } from './components/FormikForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 style={{textAllign:"center",fontWeight:"bold"}}>Course Application</h1>
     <FormikForm/>
    </>
  )
}

export default App
