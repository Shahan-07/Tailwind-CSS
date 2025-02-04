import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*   Navbar   */}

      <nav className='relative container mx-auto p-6'>
        {/*   flex container   */}
        <div className='flex items-center justify-between'>
          {/*  logo  */}
          <div className='pt-2'>
            <img src="https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/logo.svg" alt="" />
          </div>

          {/*  menu  items */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className='hover:text-gray-500'>Pricing</a>
            <a href="#" className='hover:text-gray-500'>Product</a>
            <a href="#" className='hover:text-gray-500'>About us</a>
            <a href="#" className='hover:text-gray-500'>Careers</a>
            <a href="#" className='hover:text-gray-500'>Community</a>
          </div>

          {/*  button  */}
          <a href="#" className='hidden md:block p-3 px-6 pt-2 text-white bg-red-500 rounded-full self-baseline hover:bg-red-400'>Get Started</a>
        </div>
      </nav>


      {/*   Hero Section   */}

      <section id='hero'>
        {/*   flex container   */}
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
          {/*   left item   */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            Bring everyone together to build better products
          </h1>
          <p className='max-w-sm text-center text-gray-800 md:text-left'>
            Manage makes it simple for software teams to plan day to day tasks while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
          <a href="#" className='p-3 px-6 pt-2 text-white bg-red-500 rounded-full self-baseline hover:bg-red-400'>Get Started</a>
          </div>
        </div>

        {/*  image  */}
        <div className='md:w-1/2'>
          <img src="https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/illustration-intro.svg" alt="" />
        </div>
        </div>
      </section>


      {/*   Features Section    */}

      <section id='features'>

      {/*   flex-container  */}

        <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
          {/*  what's different  */}
          <div className='flex flex-col space-y-12 md:w-1/2 '>
            <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
              What's different about Manage?
            </h2>
            <p className='max-w-sm text-center text-gray-800 md:text-left'>
              Manages provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.

            </p>
          </div>
          {/*    Numbered List   */}
          <div className='flex flex-col space-y-8 md:w-1/2'>
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              {/*   Heading  */}
              
            </div>
          </div>

        </div>


      </section>



    </>
  )
}

export default App
