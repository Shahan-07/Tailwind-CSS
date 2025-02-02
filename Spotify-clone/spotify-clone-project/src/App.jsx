import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='flex flex-col h-screen'>
          <div className='bg-blue-500 flex-1'>Top</div>
          <div className='bg-blue-300'>Bottom</div>
        </div>
      
    </>
  )
}

export default App
