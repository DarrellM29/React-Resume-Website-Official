import React from 'react'
import Kohls from '../assets/Internships/Kohls.png'
import BNSF from '../assets/Internships/BNSF.png'
import CompassMortage from '../assets/Internships/CompassMortgage.png'
import IndianaTech from '../assets/Internships/IndianaTech.png'

const Experience = () => {
  return (
    <div name='experience' className='w-full md:h-screen text-gray-300 bg-[#0A192F] pt-12'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F9D342]'>Experience</p>
                <p className='py-6'>// This is some of my past experiences</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div className='shadow-xl shadow-[#040c16] group container rounded-md'>
                    
                    <div 
                    className='flex justify-center items-center mx-auto image-div'
                    style={{backgroundImage: `url(${Kohls})`}}
                    alt="Kohls"
                    >  
                    </div>
                    <div className='text-center py-8'>
                        <h1 className='text-3xl sm:text-4xl font-bold text-[#F9D342]'>Kohl's</h1>
                        <h2 className='text-md sm:text-lg font-bold'>(Remote)</h2>
                        <h1 className='text-xl sm:text-2xl text-[#F9D342]'>Associate Software Engineer</h1>
                        <h2 className='text-md sm:text-lg'>January 2023 - Present</h2>
                    </div>
                </div>

                <div className='shadow-xl shadow-[#040c16] group container rounded-md'>
                    
                    <div 
                    className='flex justify-center items-center mx-auto image-div'
                    style={{backgroundImage: `url(${Kohls})`}}
                    alt="Kohls"
                    >  
                    </div>
                    <div className='text-center py-8'>
                        <h1 className='text-3xl sm:text-4xl font-bold text-[#F9D342]'>Kohl's</h1>
                        <h2 className='text-md sm:text-lg font-bold'>(Menomonee Falls, WI)</h2>
                        <h1 className='text-xl sm:text-2xl text-[#F9D342]'>Software Engineer Intern</h1>
                        <h2 className='text-md sm:text-lg'>June 2023 - December 2023</h2>
                    </div>
                </div>

                <div className='shadow-xl shadow-[#040c16] group container rounded-md'>
                    
                    <div 
                    className='flex justify-center items-center mx-auto image-div'
                    style={{backgroundImage: `url(${IndianaTech})`}}
                    alt="Indiana Tech"
                    >  
                    </div>
                    <div className='text-center py-8'>
                        <h1 className='text-3xl sm:text-4xl font-bold text-[#F9D342]'>Indiana Tech</h1>
                        <h2 className='text-md sm:text-lg font-bold'>(Fort Wayne, IN)</h2>
                        <h1 className='text-xl sm:text-2xl text-[#F9D342]'>Computer Science Tutor</h1>
                        <h2 className='text-md sm:text-lg'>January 2022 - December 2023</h2>
                    </div>

                </div>

                <div className='shadow-xl shadow-[#040c16] group container rounded-md'>
                    
                    <div 
                    className='flex justify-center items-center mx-auto image-div'
                    style={{backgroundImage: `url(${BNSF})`}}
                    alt="Kohls"
                    >  
                    </div>
                    <div className='text-center py-8'>
                        <h1 className='text-3xl sm:text-4xl font-bold text-[#F9D342]'>BNSF Railway</h1>
                        <h2 className='text-md sm:text-lg font-bold'>(Fort Worth, TX)</h2>
                        <h1 className='text-xl sm:text-2xl text-[#F9D342]'>Software Engineer Intern</h1>
                        <h2 className='text-md sm:text-lg'>June 2022 - August 2022</h2>
                    </div>
                </div>

                <div className='shadow-xl shadow-[#040c16] group container rounded-md'>
                    
                    <div 
                    className='flex justify-center items-center mx-auto image-div'
                    style={{backgroundImage: `url(${CompassMortage})`}}
                    alt="Kohls"
                    >  
                    </div>
                    <div className='text-center py-8'>
                        <h1 className='text-3xl sm:text-4xl font-bold text-[#F9D342]'>Compass Mortgage</h1>
                        <h2 className='text-md sm:text-lg font-bold'>(Warrenville, IL)</h2>
                        <h1 className='text-xl sm:text-2xl text-[#F9D342]'>Information Technology Intern</h1>
                        <h2 className='text-md sm:text-lg'>May 2021 - August 2021</h2>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Experience