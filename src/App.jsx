import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './conponents/Navbar'
import Home from './conponents/Home'
import Unitconverter from './conponents/Unitconverter'
import { Routes,Route,Link} from "react-router-dom";

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar title="Gadgets"/>
   <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Unitconverter" element={<Unitconverter />} />
   </Routes>
   
  
     
    </>
  )
}

export default App
