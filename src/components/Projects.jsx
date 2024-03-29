import React from 'react'
import BillSplitter from '../assets/Projects/BillSplitter.png'
import Calculator from '../assets/Projects/Calculator.png'
import GlobalGuide from '../assets/Projects/GlobalGuide.png'
import TicTacToe from '../assets/Projects/TicTacToe.png'
import TodoApp from '../assets/Projects/TodoApp.png'
import TipApp from '../assets/Projects/TipApp.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0A192F] pt-10'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F9D342]'>Projects</p>
                <p className='py-6'>// Check out some of my work</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${BillSplitter})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Bill Splitter
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://darrellm29.github.io/Bill-Splitter/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/DarrellM29/Bill-Splitter">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${GlobalGuide})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Global Guide
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://darrellm29.github.io/global-guide/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/DarrellM29/global-guide">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${Calculator})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Calculator
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://darrellm29.github.io/Calculator-2.0/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/DarrellM29/Calculator-2.0">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${TicTacToe})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Tic Tac Toe App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/DarrellM29/TicTacToe">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${TodoApp})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ToDo List App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/DarrellM29/Todo-List">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${TipApp})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Tip Time App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/DarrellM29/Tip-Calculator">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Projects