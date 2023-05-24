"use client"

import Image from 'next/image';
import niraj from '../public/niraj.png';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillGoogleSquare} from 'react-icons/ai';
import { useState } from 'react';
export default function Home() {
  const MailButton = () => {
    const email = 'Neeraj2612singh@gmail.com';
  }
    const handleMailClick = () => {
      window.location.href = `mailto:${email}`;
  };
  const [isDarkMode, setIsDarkMode] = useState('false');
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
      return (
    <div>
      <head>
    <title>NIRAJ PORTOFOLIO</title>
  </head>
  <main className={`bg-gradient-to-r ${isDarkMode ? 'from-black to-gray-800' : 'from-white to-teal-50'} px-10`} >
    <section className='min-h-screen'>
      <nav className={`pt-10 mb-12 flex justify-between  md:pt-10 md:px-20`}> 
        <h1 className={`text-xl text-black font-burtons font-medium ${isDarkMode ? 'text-white' : 'text-black'} md:text-3xl `}>Neeraj S Saini</h1>
        <ul className='flex items-center '>
          <li>
          <BsFillMoonStarsFill  className={`cursor-pointer text-black md:text-3xl md:mr-5 ${isDarkMode ? 'text-white' : 'text-black'}`}
          onClick={toggleDarkMode }
          />
            </li>
          <li><a className='text-white bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8 md:text-2xl hover:shadow-xl' href="https://drive.google.com/file/d/1KUI485tgnscb_t0czpRGwDbtMpLbJCsf/view?usp=share_link" target='_blank'>Resume</a></li>
        </ul>
      </nav>
      <div className='text-center pt-5'>
        <h2 className=' text-5xl bg-gradient-to-r from-teal-500 to-cyan-600 inline-block text-transparent bg-clip-text font-medium py-2 md:text-7xl'>Neeraj S Saini</h2>
        <h3 className= {` text-2xl py-2 ${isDarkMode ? 'text-white' : 'text-black'} md:text-4xl`}>Frontend Developer</h3>
        <p className={` ${isDarkMode ? 'text-white' : 'text-gray-600'} text-md py-5 leading-6 md:text-xl max-w-2xl md:mx-auto`}><span className='text-2xl'>👋</span> Hello, I'm<span className='text-teal-600 font-semibold'> Neeraj</span>, a passionate <span className='text-teal-600 font-semibold'>frontend developer</span> with a focus on creating intuitive and engaging user experiences. I have developed a strong skill set in various frontend technologies.</p>
      </div>
      <div className='text-5xl flex justify-center gap-8 '>
        <a href='https://www.linkedin.com/in/neeraj-saini-6a8392238' target="_blank"><AiFillLinkedin className={` ${isDarkMode ? 'text-white' : 'text-gray-600'} hover:text-gray-700 md:text-6xl`}/></a>
        <a href='https://github.com/neeraj2612' target='_blank'><AiFillGithub className={` ${isDarkMode ? 'text-white' : 'text-gray-600'} hover:text-gray-700 md:text-6xl`}/></a>
        <button onClick={handleMailClick}><AiFillGoogleSquare className={` ${isDarkMode ? 'text-white' : 'text-gray-600'} hover:text-gray-700 md:text-6xl`}/></button>
        </div>
      <div className='relative mt-10 '>
        <Image src = {niraj} className='rounded-full shadow-xl w-80 h-80 mx-auto hover:shadow-2xl ' />
  
      </div>


    </section>
  
                                            
    <section>
      
    <div className={`text-center p-10 shadow-lg rounded-xl mt-2`}>
      <h2 className=' text-5xl  font-medium mb-2 bg-gradient-to-r from-teal-500 to-cyan-600 inline-block text-transparent bg-clip-text md:text-7xl'>Skills</h2>
      <p className={` text-md  ${isDarkMode ? 'text-white' : 'text-gray-600'} py-3 leading-6 md:text-2xl max-w-lg mx-auto  : 'text-white'}`}>Programming & Web Development Tools🔥..    {"\n"}

      I have worked with</p>
      <ul className={`flex justify-between ${isDarkMode ?   'bg-gradient-to-r from-gray-850 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-white to-teal-50'} md:px-20 md:mx-20 rounded-t-xl`}>
        <li className='p-5 hover:bg-teal-100  hover:shadow-xl'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" height={120} width={120} /></li>
        <li className='p-5 hover:bg-teal-100 hover:shadow-xl'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" height={120} width={120}/></li>
        <li className='p-5 hover:bg-teal-100 hover:shadow-xl'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height={120} width={120}/></li>
        <li className='p-5 hover:bg-teal-100 hover:shadow-xl'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" height={150} width={150}/></li>
      </ul>
       <ul className={`flex justify-between ${isDarkMode ?   'bg-gradient-to-r from-gray-850 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-white to-teal-50'} md:px-20 md:mx-20 md:py-5`}> 
        <li className='p-5 hover:bg-teal-100 hover:shadow-xl md:h-100 md:w-100'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height={120} width={120}/></li>
        <li className='p-5 hover:bg-teal-100 hover:shadow-xl'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" height={120} width={120}/></li>
        <li className='p-5 hover:bg-teal-100 hover:shadow-xl'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height={120} width={120}/></li>
        <li className='p-5 hover:bg-teal-100 hover:shadow-xl'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" height={120} width={120}/></li>
        </ul>
        <ul className={`flex justify-between ${isDarkMode ?   'bg-gradient-to-r from-gray-850 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-white to-teal-50'} md:px-20 md:mx-20 rounded-b-xl`}>

        <li className='p-5 hover:bg-teal-100 hover:shadow-xl md:h-150 md:w-150'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" height={120} width={120}/></li>
        <li className='p-5 hover:bg-teal-100 hover:shadow-xl '><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height={120} width={120}/></li>
        <li className='p-5 hover:bg-teal-100 hover:shadow-xl '><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height={120} width={120}/></li>
        <li className='p-5 hover:bg-teal-100 hover:shadow-xl '>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height={120} width={120}/>
          </li>
          </ul>
    </div>
    </section>
    <section>
      <div className='text-center m-10'>
        <h2 className='text-5xl bg-gradient-to-r from-teal-500 to-cyan-600 inline-block text-transparent bg-clip-text font-medium mb-2 md:text-6xl'>PROJECTS</h2>
        <p className={` md:text-xl md:font-semibold py-3 leading-6 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} >Projects that i have worked on!</p>
        <ul className={`flex mt-5 pb-2 shadow-xl rounded-lg justify-center ${isDarkMode ?   'bg-gradient-to-r from-gray-850 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-white to-teal-50'}`}>
        <li className='p-5 mx-2 hover:bg-teal-100 hover:shadow-xl md:px-20'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height={120} width={120}/></li>
        <li className='p-5 hover:bg-teal-100 hover:shadow-xl md:px-20'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" height={120} width={120}/></li>
        <a href='https://www.figma.com/files/recent?fuid=860513957482117094 ' target='_blank'><li className='p-5 mx-2 hover:bg-teal-100  hover:shadow-xl md:px-20'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height={120} width={120}/></li></a>
        </ul>
      </div>
    </section>
    <footer>
      <div className='text-center py-2 '>
        <h1 className={` text-xs pb-5 ${isDarkMode ? 'text-white' : 'text-black'} `}>Created using Next.js , React.js & Tailwind CSS</h1>
      </div>
    </footer>
  </main>
  </div>
      
    
  
 
  );
}
