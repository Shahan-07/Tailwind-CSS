import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='flex flex-col h-screen text-sm text-gray-400'>
          <div className='flex-1 flex overflow-y-hidden text-start'>
            <div className='sidebar bg-gray-900 w-48 flex-none  flex flex-col justify-between font-semibold'>
              <ul className='py-2'>
                <li className='border-l-4 border-green-600'>
                  <a href="#" className='flex items-center mx-4 mt-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='fill-current text-white' x="0px" y="0px" width="20" height="100" viewBox="0 0 30 30">
                    <path d="M 15 2 A 1 1 0 0 0 14.300781 2.2851562 L 3.3925781 11.207031 A 1 1 0 0 0 3.3554688 11.236328 L 3.3183594 11.267578 L 3.3183594 11.269531 A 1 1 0 0 0 3 12 A 1 1 0 0 0 4 13 L 5 13 L 5 24 C 5 25.105 5.895 26 7 26 L 23 26 C 24.105 26 25 25.105 25 24 L 25 13 L 26 13 A 1 1 0 0 0 27 12 A 1 1 0 0 0 26.681641 11.267578 L 26.666016 11.255859 A 1 1 0 0 0 26.597656 11.199219 L 25 9.8925781 L 25 6 C 25 5.448 24.552 5 24 5 L 23 5 C 22.448 5 22 5.448 22 6 L 22 7.4394531 L 15.677734 2.2675781 A 1 1 0 0 0 15 2 z M 18 15 L 22 15 L 22 23 L 18 23 L 18 15 z"></path>
                  </svg>
                  <span className='ml-2 text-white'>Home</span>
                  </a>
                </li>

                <li>
                  <a href="#" className='flex items-center mx-5 -mt-5 '>
                  <img width="20" height="20" src="https://img.icons8.com/skeuomorphism/32/browser-window.png" alt="browser-window"/>
                  <span className='ml-2 text-white'>Browse</span>
                  </a>
                </li>
              </ul>


              <div className='overflow-y-auto px-5 mt-4'>
                <h3 className='uppercase tracking-widest text-gray-500 font-normal text-xs'>Your Library</h3>
                <ul className='leading-loose'>
                    <li className='truncate'><a href="#" className='hover:text-white'>Made For You</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>Recently Played</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>Liked Songs</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>Albums</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>Artists</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>Podcasts</a></li>
                </ul>

                <h3 className='uppercase tracking-widest text-gray-500 font-normal text-xs mt-6'>PlayList</h3>
                <ul className='leading-loose mb-6'>
                    <li className='truncate'><a href="#" className='hover:text-white'>Acoustic Hits</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>Acoustic Cover</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>Discover Weekly</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>Hot Hits Canada</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>90's Hip Hops</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>90's Smash Hits</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>TGIF</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>Mint Canada</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>Hip-Hop_Central</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>Today's Top Hits</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>Get Trunt</a></li>
                    <li className='truncate'><a href="#" className='hover:text-white'>iTunes</a></li>
                </ul>

              </div>

              <div className='border-t border-gray-800 h-16 px-4 py-2 flex items-center group'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" className='fill-current text-white' viewBox="0 0 50 50">
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
              </svg>
              <a href="#" className='font-normal text-gray-500 ml-2 group-hover:text-white'>New PlayLists</a>
              </div>
            </div>


            <div className='contetnt-area bg-gray-800 flex-1 flex flex-col'>
              <div className="top-bar flex items-center justify-between px-4 py-2">
                <div className="flex items-center">
                  <button>
                  <img width="25" height="25" src="https://img.icons8.com/carbon-copy/50/back.png" alt="back"/>
                  </button>

                  <button>
                  <img width="25" height="25" src="https://img.icons8.com/dotty/50/forward.png" alt="forward"/>
                  </button>

                  <div className='ml-4 relative'>
                    <input type="text" placeholder='search' className='bg-white text-gray-800 placeholder-gray-800 rounded-full px-3 pl-8 py-1'/>
                    <div className="absolute top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30" className='fill-current text-gray-800 h-6 w-6 pt-1 pl-2'>
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                    </svg>
                    </div>
                  </div>
                </div>
              </div>


              <div className="overflow-y-auto ">
                <div className="container mx-auto">
                  <h2 className='mt-20 ml-20 text-4xl font-semibold text-white'>Home</h2>
                  <div className='mt-10'>
                    <h3 className='font-semibold ml-20 text-xl border-b border-gray-800 pb-2 '>Recently played</h3>
                    <div className="flex items-center mt-4 mx-4">
                      <div className='w-1/5 px4'>
                        <div><a href="#"><img src="https://pictical.com/cdn/shop/products/Facetune_25-07-2020-22-26-43_1024x1024@2x.jpg?v=1625801662" alt="album cover"/></a></div>
                        <div>
                          <a href="#" className='font-semibold block hover:text-white mt-2'>Acoustic pop covers 2019</a>
                          <div className='text-gray-500 mt-2'>Amazing Acoustics Covers updated every week </div>
                          <div className='uppercase tracking-widest text-xs text-gray-500 mt-2'>6679 followers</div>
                        </div>
                      </div>
                      <div className='w-1/5 px4 mx-2'>
                        <div><a href="#"><img src="https://m.media-amazon.com/images/I/7109MKx3reS._AC_UF894,1000_QL80_.jpg" alt="album cover"/></a></div>
                        <div>
                          <a href="#" className='font-semibold block hover:text-white mt-2'>Acoustic pop covers 2019</a>
                          <div className='text-gray-500 mt-2'>Amazing Acoustics Covers updated every week </div>
                          <div className='uppercase tracking-widest text-xs text-gray-500 mt-2'>6679 followers</div>
                        </div>
                      </div>
                      <div className='w-1/5 px4 mx-2'>
                        <div><a href="#"><img src="https://m.media-amazon.com/images/I/71yyxV25-eS._AC_UF894,1000_QL80_.jpg" alt="album cover"/></a></div>
                        <div>
                          <a href="#" className='font-semibold block hover:text-white mt-2'>Acoustic pop covers 2019</a>
                          <div className='text-gray-500 mt-2'>Amazing Acoustics Covers updated every week </div>
                          <div className='uppercase tracking-widest text-xs text-gray-500 mt-2'>6679 followers</div>
                        </div>
                      </div>
                      <div className='w-1/5 px4 mx-2'>
                        <div><a href="#"><img src="https://m.media-amazon.com/images/I/71wsypAYDUL._AC_UF894,1000_QL80_.jpg" alt="album cover"/></a></div>
                        <div>
                          <a href="#" className='font-semibold block hover:text-white mt-2'>Acoustic pop covers 2019</a>
                          <div className='text-gray-500 mt-2'>Amazing Acoustics Covers updated every week </div>
                          <div className='uppercase tracking-widest text-xs text-gray-500 mt-2'>6679 followers</div>
                        </div>
                      </div>
                      <div className='w-1/5 px4'>
                        <div><a href="#"><img src="https://m.media-amazon.com/images/I/71iS6JfibYL._AC_UF894,1000_QL80_.jpg" alt="album cover"/></a></div>
                        <div>
                          <a href="#" className='font-semibold block hover:text-white mt-2'>Acoustic pop covers 2019</a>
                          <div className='text-gray-500 mt-2'>Amazing Acoustics Covers updated every week </div>
                          <div className='uppercase tracking-widest text-xs text-gray-500 mt-2'>6679 followers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </div>
          <div className='bg-gray-700 text-start flex-none h-22 px-5 flex items-center justify-between'>
            <div className='flex items-center'>
              <a href="#"><img src="https://www.sfcustomizables.com/cdn/shop/products/BlurBackgroundMusicTimer2000x2000-01_1800x1800.jpg?v=1645505984" className='w-16 h-16' alt="album-cover" /></a>
              <div className="ml-3">
                <div><a href="#" className='hover:underline'>Name of song</a></div>
                <div><a href="#" className='text-xs  text-gray-500 hover:underline hover:text-white'>Artist Name</a></div>
              </div>
            </div>
            <div className="player-controls flex flex-col justify-center">
              <div className="flex justify-center">
                <button className='ml-8'>
                <img width="25" height="25" src="https://img.icons8.com/carbon-copy/100/shuffle.png" className='fill-current hover:text-white cursor-pointer' alt="shuffle"/>
                </button>
                <button className='ml-8'>
                <img width="25" height="25" src="https://img.icons8.com/ios/50/first.png" alt="first" className='cursor-pointer'/>
                </button>
                <button className='ml-8'>
                <img width="25" height="25" src="https://img.icons8.com/ios/50/memories.png" alt="memories" className='cursor-pointer'/>
                </button>
                <button className='ml-8'>
                <img width="25" height="25" src="https://img.icons8.com/ios/50/last.png" alt="last" className='cursor-pointer'/>
                </button>
                <button className='ml-8'>
                <img width="25" height="25" src="https://img.icons8.com/fluency-systems-regular/50/cross-shuffle.png" alt="cross-shuffle" className='cursor-pointer'/>
                </button>
              </div>
              <div className="max-w-full mt-3 flex items-center justify-center">
                <div className='text-xs text-gray-500'>1:20</div>
                <div className='bg-gray-500 rounded-lg w-full xl:w-180 h-1 ml-3'></div>
                <div className='ml-3 text-xs text-gray-500'>3:20</div>
              </div>
            </div>



            <div className="volume-controls flex items-center">
              <button>
              <img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/50/web-player.png" alt="web-player"/>
              </button>
              <button className='ml-2'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                <path d="M 14.75 3 A 1.0001 1.0001 0 0 0 13.798828 3.6933594 L 7.2714844 24 L 5 24 A 1.0001 1.0001 0 1 0 5 26 L 25 26 A 1.0001 1.0001 0 1 0 25 24 L 22.728516 24 L 16.201172 3.6933594 A 1.0001 1.0001 0 0 0 15.25 3 L 14.75 3 z M 13.550781 11 L 16.449219 11 L 18.056641 16 L 11.943359 16 L 13.550781 11 z M 10.65625 20 L 19.34375 20 L 20.628906 24 L 9.3710938 24 L 10.65625 20 z"></path>
                </svg>
              </button>
              <button className='ml-2'>
              <img width="20" height="20" src="https://img.icons8.com/ios/50/room-sound.png" alt="room-sound"/>
              </button>
              <div className='bg-gray-500 rounded-lg w-full xl:w-10 h-1 ml-3'></div>
              <button className='ml-2'>
              <img width="20" height="20" src="https://img.icons8.com/ios/50/sound-cloud-.png" alt="sound-cloud-"/>
              </button>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default App
