import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* header */}

      <div className='bg-indigo-700 p-4 flex justify-between items-center '>
        {/* left side */}

        <div className='flex items-center'>
          <img src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-1024.png" width="50" alt="Logo" className='mr-2'/>
          <a href="#" className='inline-block p-2 text-indigo-200 mr-2 hover:text-indigo-100'>Home</a>
          <a href="#" className='inline-block p-2 text-indigo-200 hover:text-indigo-100'>About</a>
        </div>

        {/* right side */}

        <div>
          <a href="#" className='inline-block p-2 text-indigo-200 hover:text-indigo-100 mr-2'>Login</a>
          <a href="#" className='inline-block p-2 text-yellow-700 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800 transition ease-in duration-150'>Sign Up</a>
        </div>
      </div>



      {/* hero */}

      <div>

        {/* left---------- */}
        <div>
          <h2>Welcome to Galaxy</h2>
          <p>cold Mountains and Lovely stars</p>

          <a href="#">Learn More</a>
          <a href="#">Get Started</a>
        </div>


        {/* right--------- */}
        <div>
          <img src="https://images.unsplash.com/photo-1734983235410-cbbc5f5fcdaf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nature" />
        </div>
      </div>



      {/* features */}






      {/* footer + newsletter */}
    </>
  )
}

export default App
