import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div name='home' className='w-full h-screen bg-[#0A192F]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#F9D342]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Darrell Martin</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a senior Computer Science Student.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a senior Computer Science Student at Indiana Tech 
                looking for full-time roles in Software Engineering and 
                Full-Stack Development.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F9D342] hover:border-[#F9D342]'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    View Experience <HiArrowNarrowRight className='flex justify-center items-center group-hover:rotate-90 duration-300'/>
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home