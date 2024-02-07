
import Activities from './Activities'
import './App.css'
import Card from './Card'
import Footer from './Footer'
import Mail from './Mail'
import { FiMenu } from "react-icons/fi";

function App() {

  return (
    <>
      <header className="bg-hero h-dvh w-full rounded-b-[12rem] bg-center flex flex-col gap-64 px-10 xl:px-32 pt-10">
        {/* Menu Classique */}
        <div className='lg:flex flex-row hidden justify-between'>
          <div className='flex flex-row items-center gap-10 '>
            <img src={'../public/images/logo.png'} alt='logo' className='w-10 h-10' />
            <a className='text-gray-300 hover:text-white cursor-pointer'>Home</a>
            <a className='text-gray-300 hover:text-white cursor-pointer'>Destination</a>
            <a className='text-gray-300 hover:text-white cursor-pointer'>Near Me</a>
            <a className='text-gray-300 hover:text-white cursor-pointer'>Events</a>
            <a className='text-gray-300 hover:text-white cursor-pointer'>Blog</a>
            <a className='text-gray-300 hover:text-white cursor-pointer'>Gallery</a>
            <a className='text-gray-300 hover:text-white cursor-pointer'>About</a>
            <a className='text-gray-300 hover:text-white cursor-pointer'>Contact Us</a>
          </div>
          <div className='flex flex-row items-center gap-10 text-white'>
            <button className=''>Sign up</button>
            <button className=' border-2 p-2 px-6 rounded-full'>Sign In</button>
          </div>
        </div>

        {/* Menu Burger */}
        <div className='lg:hidden flex flex-row justify-between items-center'>
          <img src={'./images/logo.png'} alt='logo' className='w-13 h-13' />
          <button className='bg-white p-3 rounded-2xl'>
            <FiMenu className='w-8 h-8 ' style={{ color: '#e76f51' }} />
          </button>
        </div>

        <div className='flex flex-col items-center gap-12 text-white'>
          <h1 className=' text-[3.4rem] max-w-sm text-center leading-tight font-bold'>Find Yourself Outside.</h1>
          <span className='flex flex-col items-center gap-5'>
            <p className='text-grey-100 text-center max-w-lg'>Book unique camping experiences on over 300,000 campsites, cabins, RV parks, public parks and more</p>
            <button className=' bg-primary py-2 px-10 rounded-3xl'>Discover</button>
          </span>
        </div>
      </header>

      <Card />
      <Activities />
      <Mail />
      <Footer />
    </>
  )
}

export default App
