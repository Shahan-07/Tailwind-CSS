import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* header */}

      <div className='bg-indigo-700 p-4 flex justify-between items-center'>
        {/* left side */}

        <div className='flex items-center'>
          <img src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-1024.png" width="50" alt="Logo" className='mr-2'/>
          <a href="#" className='inline-block p-2 text-indigo-200 mr-2 hover:text-indigo-100'>Home</a>
          <a href="#" className='inline-block p-2 text-indigo-200 hover:text-indigo-100'>About</a>
        </div>

        {/* right side */}

        <div className='hidden md:block'>
          <a href="#" className='inline-block p-2 text-indigo-200 hover:text-indigo-100 mr-2'>Login</a>
          <a href="#" className='inline-block p-2 text-yellow-700 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800 transition ease-in duration-150'>Sign Up</a>
        </div>
      </div>



      {/* hero */}

      <div className='md:flex justify-between py-20 px-10 bg-indigo-600 text-indigo-100'>

        {/* left---------- */}

        <div className='md:w-1/2 mb-10 md:mb-0 '>
          <h2 className='text-2xl md:text-4xl lg:text-6xl lg:px-4 text-white mb-6'>Welcome to wild world</h2>
          <p className='mb-6'>cold Mountains and Lovely nature</p>

          <a href="#" className='inline-block py-3 px-6 text-lg bg-gray-400 text-gray-800 hover:bg-gray-300 rounded mr-2'>Learn More</a>
          <a href="#" className='inline-block py-3 px-6 text-lg bg-orange-400 text-orange-800 hover:bg-orange-300 rounded'>Get Started</a>
        </div>


        {/* right--------- */}
        <div className='md:w-1/2'>
          <img src="https://images.unsplash.com/photo-1734983235410-cbbc5f5fcdaf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nature" className='w-full rounded shadow-2xl' />
        </div>
      </div>



      {/* features */}

      <div className='md:flex py-16 px-10 bg-indigo-800 text-indigo-200 text-center'>
        <div className='mr-2 text-center'>
          <img src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full mb-4 rounded border-solid border-2 border-indigo-400' />
          <p>pine trees</p>
        </div>
        <div className='mr-2 mt-8 text-center'>
          <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full mb-4 rounded border-solid border-2 border-indigo-400' />
          <p>lillies flower</p>
        </div>
        <div className='mr-2 text-center'>
          <img src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full mb-4 rounded border-solid border-2 border-indigo-400' />
          <p>Mushroom</p>
        </div>
        <div className='mr-2 mt-8 text-center'>
          <img src="https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=2644&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full mb-4 rounded border-solid border-2 border-indigo-400'/>
          <p>Nature and Lake</p>
        </div>
      </div>


      {/* footer + newsletter */}

      <div className='p-10 bg-indigo-900 text-indigo-400 flex justify-between'>


        {/* left--------- */}
        <div className='md:w-1/2'>

          <h3 className='text-lg mb-2'>Join the Newsletter</h3>
          <form className='flex'>
            <input type="email" className='w-full rounded-l py-3 px-4 outline-none focus:bg-indigo-200'/>
            <button className='bg-red-300 hover:bg-red-400 text-red-800 rounded-r px-4'>Join</button>
          </form>

        </div>
        {/* right--------- */}

        <div className='flex items-center'>
          copyright &copy; Nature 2020 - Right Resrved
        </div>
      </div>








    </>
  )
}

export default App
