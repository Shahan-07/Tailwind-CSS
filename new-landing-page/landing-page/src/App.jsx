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
          {/*    List item 1   */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              {/*   Heading  */}
              <div className='rounded-l-full bg-red-200 md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-red-400'>
                    01
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Track company-wide progress
                  </h3>
                </div>
              </div>

              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Track company-wide progress
                </h3>
                <p className='text-gray-600'>
                  See how your day to day tasks fit into the wider
                  vision.Go from tracking progress at the milestone
                  level all the way sone to the smallest of details.
                  Never lose sight of the bigger picture again.
                </p>
              </div>
            </div>



            {/*    List item 2   */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              {/*   Heading  */}
              <div className='rounded-l-full bg-red-200 md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-red-400'>
                    02
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Advance built-in Reports
                  </h3>
                </div>
              </div>

              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Advance built-in Reports
                </h3>
                <p className='text-gray-600'>
                  See how your day to day tasks fit into the wider
                  vision.Go from tracking progress at the milestone
                  level all the way sone to the smallest of details.
                  Never lose sight of the bigger picture again.
                </p>
              </div>
            </div>



            {/*    List item 3   */}
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
              {/*   Heading  */}
              <div className='rounded-l-full bg-red-200 md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-red-400'>
                    03
                  </div>
                  <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    Everthing you need in one place
                  </h3>
                </div>
              </div>

              <div>
                <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Everthing you need in one place
                </h3>
                <p className='text-gray-600'>
                  See how your day to day tasks fit into the wider
                  vision.Go from tracking progress at the milestone
                  level all the way sone to the smallest of details.
                  Never lose sight of the bigger picture again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    {/*     Testimonials    */}


    <section id='testimonials'>
      {/*  container to heading and testm blocks  */}

      <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
        {/*  Heading  */}

        <h2 className='text-4xl font-bold text-center'>
          What's Different About Manage?
        </h2>
        {/*   Testimonial  container */}
        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>

          {/*   Testimonial 1 */}

          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:w-1/3'>
          <img src="https://github.com/bradtraversy/tailwind-landing-page/blob/main/img/avatar-anisha.png?raw=true" className='w-16 -mt-14'/>
          <h5 className='text-lg font-bold'>Anisha Li</h5>
          <p className='text-sm text-gray-600'>
            "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestone at all times keeps everyone motivated"
          </p>
          </div>


          {/*   Testimonial 2 */}

          <div className='hiden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:flex md:w-1/3'>
          <img src="https://github.com/bradtraversy/tailwind-landing-page/blob/main/img/avatar-ali.png?raw=true" className='w-16 -mt-14'/>
          <h5 className='text-lg font-bold'>Ali Bravo</h5>
          <p className='text-sm text-gray-600'>
            "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestone at all times keeps everyone motivated"
          </p>
          </div>

          {/*   Testimonial 3 */}

          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:flex md:w-1/3'>
          <img src="https://github.com/bradtraversy/tailwind-landing-page/blob/main/img/avatar-richard.png?raw=true" className='w-16 -mt-14'/>
          <h5 className='text-lg font-bold'>Richard watsson</h5>
          <p className='text-sm text-gray-600'>
            "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestone at all times keeps everyone motivated"
          </p>
          </div>
        </div>
        {/*  button  */}
        <div className='my-16'>
        <a href="#" className='p-3 px-6 pt-2 text-white bg-red-500 rounded-full self-baseline hover:bg-red-400'>Get Started</a>
        </div>
      </div>
    </section>


    {/*     CTA Section    */}

    <section id='cta' className='bg-red-400'>
      {/*  flex container  */}
      <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
        {/*    Heading   */}
        <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
          Simplify how your team works today
        </h2>
        {/*    button   */}
        <div>
        <a href="#" className='p-3 px-6 pt-2 text-red-400 bg-white rounded-full shadow-2xl self-baseline hover:bg-gray-700'>Get Started</a>
        </div>
      </div>
    </section>


    {/*    footer    */}

    <footer className='bg-gray-700'>

      {/*   flex container  */}
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        {/*  Logo and social links container  */}
          <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-center'>
            <div className='mx-auto my-6 text-center text-white md:hidden'>
              copyright &copy; 2025, All Rights Reserved
            </div>
            {/*  logo  */}
            <div>
              <img src="https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/logo-white.svg" className='h-8'/>
            </div>
            {/* social links container */}
            <div className='flex justify-center space-x-4'>
              {/*   link 1   */}
              <a href="#">
                <img src="https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/icon-facebook.svg" className='h-8'/>
              </a>

              {/*   link 2   */}
              <a href="#">
                <img src="https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/icon-youtube.svg" className='h-8'/>
              </a>

              {/*   link 3   */}
              <a href="#">
                <img src="https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/icon-twitter.svg" className='h-8'/>
              </a>

              {/*   link 4   */}
              <a href="#">
                <img src="https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/icon-pinterest.svg" className='h-8'/>
              </a>

              {/*   link 5   */}
              <a href="#">
                <img src="https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/icon-instagram.svg" className='h-8'/>
              </a>
            </div>
          </div>
          {/*   list container  */}
            <div className='flex justify-around space-x-32'>
              <div className='flex flex-col space-y-3 text-white'>
                <a href="#" className='hover:text-red-400'>Home</a>
                <a href="#" className='hover:text-red-400'>Pricing</a>
                <a href="#" className='hover:text-red-400'>Products</a>
                <a href="#" className='hover:text-red-400'>About</a>
              </div>
              <div className='flex flex-col space-y-3 text-white'>
                <a href="#" className='hover:text-red-400'>Career</a>
                <a href="#" className='hover:text-red-400'>Community</a>
                <a href="#" className='hover:text-red-400'>Privacy Policy</a>
              </div>
            </div>

            {/*   input container  */}

            <div className='flex flex-col justify-between'>
              <form>
                <div className='flex space-x-3'>
                  <input type="text" className='flex-1 px-4 rounded-full bg-white focus:outline-none' placeholder='updated in your inbox'/>

                  <button className='px-6 py-2 text-white rounded-full bg-red-400 hover:bg-red-300 focus:outline-none'> Go
                  </button>
                </div>
              </form>
              <div className='hidden text-white md:block'>
                copyright &copy; 2025, All rights Reserved
              </div>

            </div>

      </div>

    </footer>

    </>
  )
}

export default App
