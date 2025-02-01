import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='flex justify-between px-24 h-16 items-center'>
          <div className='text-3xl'>TailwindLOGO</div>
          <div>
            <a href="#" className='text-xl p-4'>Home</a>
            <a href="#" className='text-xl p-4'>About</a>
            <a href="#" className='text-xl p-4'>Blog</a>
            <a href="#" className='text-xl p-4'>Contact</a>
            <a href="#" className='text-xl p-4 bg-green-600 py-2 text-white hover:bg-green-700 rounded-md'>Login</a>
          </div>
      </nav>

      <header className='flex justify-between items-center'>
        <div className='pl-20 w-2/5 animate-pulse'>
          <h1 className='text-4xl'>Welcome to our <span className='text-green-600 font-bold'>Responsive</span> website</h1>
          <br/>
          <p>"Welcome to our website! We are dedicated to providing top-notch services and innovative solutions to meet your needs. Whether you're looking for expert advice, quality products, or seamless user experiences, we've got you covered. </p> 
          <button className='bg-green-600 px-2 py-2 text-white rounded cursor-pointer'>Subscribe</button>
          <button className='bg-gray-300 px-2 py-2 mt-4 ml-2 rounded cursor-pointer'>Connect with us</button>
          <br/>
          <img src="/src/img/icon.png" width={100} className='mt-4 ml-30' />
        </div>
        <div className='w-3/5'>
          <img src="/src/img/img4.png" alt="" />
        </div>
      </header>
    </>
  )
}

export default App
