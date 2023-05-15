import React, {useState} from 'react'
import { Link} from "react-router-dom"
import image from "../assets/FB_IMG_1632361671640__2_-removebg-preview.png"
import {link, navTexts } from '../constants'
import {FaUserAlt} from "react-icons/fa"

const About = () => {
  const [open, setOpen] = useState(false);
   
  const Font ={
    fontFamily: 'Roboto, sans-serif'
  }
  return (
    <div>
          <div
    className="pt-6 h-full w-full sm:h-full sm:w-full sm:overflow-hidden
     bg-blue-700 border-b-0 border-r-0 border-l-0 border-t-2 rounded-t-xl"
  
  >
    <div
      className=" p-6 overflow-hidden
        sm:border-b-2 sm:border-white sm:rounded-b-md"
    >
      <div className="sm:pb-3 sm:pt-3 sm:flex">
        <img
          src={image}
          alt=""
          className=" fixed sm:fixed sm:top-8 sm:right-24 w-[90px] h-[50px] top-9"
        />
        <FaUserAlt
          className="cursor-pointer sm:cursor-pointer text-white sm:text-white
          sm:text-2xl text-4xl fixed sm:fixed top-10 sm:right-10 right-60 font-normal sm:top-11 hover:text-gray-500"
          onClick={() => setOpen(!open)}
        />
      </div>
    </div>
    {open && (
      <div
        className="overflow-hidden
      sm:border-b-2 sm:border-white sm:rounded-b-md"
      >
        <ul
          className="flex justify-center flex-col gap-6 sm:gap-2 text-center cursor-pointer
        pb-10" style={Font}
        >
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
    <div className=' bg-slate-200'>
      <h3 className='text-blue-700 font-bold text-center text-4xl pt-5' style={Font}>About Me</h3>
    <div className="flex justify-center py-5 sm:flex sm:flex-col sm:gap-10">
    <div className="w-1/2 animate__animated animate__fadeInLeft flex flex-row justify-center">
      <img src={image} alt="vector" className="h-[250px] w-[350px] sm:relative sm:left-[100px]" />
    </div>
    <div className="w-1/2 animate__animated animate__fadeInRight sm:m-auto">
     <p className='text-blue-700 text-xl relative right-24 pt-8 font-medium' style={Font}>
      Joel is a web developer, with over 3 years of epeerience,<br/>
      in developing websites and webApps, for individuals, and <br/>
      companies, helping them achieve their aims and objectives.<br/>
      Happy with coding in:<br/>
       <span className='text-black font-bold'> HTML, CSS , JAVASCRIPT ,
       TAILWINDCSS, AND REACTjs.</span>
     </p>
     <div className='relative right-28 pt-5'>
     <a href='' className=' p-4 bg-blue-700 border rounded text-white' style={Font}>
      {link.secondText}</a>
     </div>
   
    </div>
  </div>
    </div>
    
    </div>

  )
}

export default About