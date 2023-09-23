import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [watches,setWatches]=useState([])

  useEffect(()=>{

    fetch('watches.json')
    .then(res=>res.json())
    .then(data=>setWatches(data))

  },[])
  

  return (
    <>
     
      <h1>Vite + React</h1>
      <h2>wathces:{watches.length
      }</h2>
      

    </>
  )
}

export default App
