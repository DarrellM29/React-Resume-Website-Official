import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0A192F] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#F9D342]'>
                        About
                    </p>
                </div>
                    <div></div>
                    </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, nice to meet you, please take a look around and make yourself at home.</p>
                    </div>
                    <div>
                        <p>I am a current Associate Software Engineer at Kohl's Technology. 
                            I recently graduated from Indiana Institute of Technology with a 
                            Bachelor's of Science in Computer Science and two minors in Web Development
                            and Humanities. I have also interned as a software engineer with 
                            multiple companies across the US.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About