import React, { useState } from 'react'
import image from "../assets/FB_IMG_1632361671640__2_-removebg-preview.png"
import { Link} from "react-router-dom"
import { link, homeText, navTexts } from '../constants'
import {FaUserAlt} from "react-icons/fa"
import {FaHtml5,FaReact,FaCss3Alt, } from "react-icons/fa";
import { DiJavascript1} from "react-icons/di";
import {SiTailwindcss} from "react-icons/si";
import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init();

const Home = () => {
  const [open, setOpen] = useState(false);
 
  const Font ={
    fontFamily: 'Roboto, sans-serif'
  }

  
  return (
    <>
     <div>
     <div
        className="p-5 h-full w-full sm:h-full sm:w-full sm:overflow-hidden pt-7 mt-2
         border-b-2 border-r-0 border-l-0
          border-t-0 rounded-t-xl m-auto sm:mt-0 bg-slate-200"
      >
        <div
          className=" overflow-hidden"
        >
          <div className="sm:flex flex justify-between">
            <img
              src={image}
              alt=""
              className="w-[90px] sm:w-[50px] h-[50px] sm:h-[30px]"/>
            <FaUserAlt
              className="cursor-pointer sm:cursor-pointer text-blue-700 sm:text-blue-700
              sm:text-2xl text-4xl float-right font-normal hover:text-gray sm:float-right"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        {open && (
          <div
            className="overflow-hidden
          sm:border-b-2 sm:border-white sm:rounded-b-md bg-blue-800">
            <ul
              className="flex justify-center flex-col gap-6 sm:gap-2 text-center cursor-pointer
            pb-10" style={Font} data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/" target='_blank'>{navTexts.first}</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/about" target='__blank'>{navTexts.second}</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/skills" target='_blank'>{navTexts.third}</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/contact" target='_blank'>{navTexts.fourth}</Link>
              </li>   
            </ul>
          </div>
        )}
        </div>
    <div className='w-full sm:w-full  h-full sm:h-full bg-slate-200 flex flex-col space-x-4 sm:flex
     sm:flex-col justify-center m-auto pb-9 sm:overflow-hidden'>
      <div className='flex sm:flex-col justify-around' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
      <img src={image} alt="my image" className='h-[500px] sm:h-[150px] sm:w-[210px] sm:m-auto' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000"/>
<div className='flex gap-5 sm:pt-2'>
  <div className='flex flex-col pt-28'>
  <h3 className='text-7xl font-bold leading-normal relative right-20 sm:text-3xl sm:font-bold sm:left-10 sm:top-8' style={Font}>{homeText.first}</h3>
    <h2 className='text-7xl font-bold leading-normal relative right-20 sm:text-3xl sm:right-3 sm:text-center sm:top-8' style={Font}>{homeText.second}</h2>
    <a href='https://github.com/Joel0007tech' className='font-semibold w-[350px] sm:w-[200px]
     p-7 bg-blue-700 text-white mt-10 mb-2 text-4xl sm:text-lg sm:m-auto sm:p-3
     hover:text-blue-700 hover:bg-slate-400 border-[3px]
      rounded-xl sm:rounded-md text-center relative right-14 sm:relative sm:right-3 sm:top-10' style={Font}>
      {link.firstText}</a>
  </div>

  </div>
      </div>
      <div className='pt-5 flex justify-center sm:pt-20 relative right-2' data-aos="zoom-out" data-aos-delay="100" data-aos-duration="1000">
        <div className='flex justify-center bg-blue-200 w-fit gap-3'>
          <FaHtml5 className="w-[80px] h-[50px] fill-red-600 sm:w-[50px]
         border border-t-4 border-b-2 border-r-2 border-l-2 border-blue-500 rounded-md hover:animate-pulse"/>
              <FaCss3Alt className="w-[80px] h-[50px] fill-blue-500 sm:w-[50px]
               border border-t-4 border-b-2 border-r-2 border-l-2 border-blue-500 rounded-md hover:animate-pulse"/>
              <DiJavascript1 className="w-[80px] h-[50px] sm:w-[50px]
               border border-t-4 border-b-2 border-r-2 border-l-2 border-blue-500 rounded-md hover:animate-pulse"/>
              <SiTailwindcss className="w-[80px] h-[50px] text-blue-400 sm:w-[50px]
               border border-t-4 border-b-2 border-r-2 border-l-2 border-blue-500 rounded-md hover:animate-pulse"/>
              <FaReact className="w-[80px] h-[50px] text-blue-400 sm:w-[50px]
               border border-t-4 border-b-2 border-r-2 border-l-2 border-blue-500 rounded-md hover:animate-pulse"/>
        </div>
      </div>
</div>
</div>
    </>
  )
}

export default Home




