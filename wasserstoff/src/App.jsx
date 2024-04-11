import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Event_landing from './components/Event_landing'
import Collection from './components/Collection'
import Caurosal from './components/Caurosal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
      <Navbar  />
      <Event_landing />
        
      <Collection />
      
      </div>
     
    </>
  )
}

export default App
