import React, { useState } from 'react'
import image from "../assets/FB_IMG_1632361671640__2_-removebg-preview.png"
import { Link} from "react-router-dom"
import { link, homeText, navTexts } from '../constants'
import {FaUserAlt} from "react-icons/fa"
// import {
//   TbBrandWhatsapp,
//   TbBrandLinkedin,
//   TbBrandTwitter,
//   TbBrandInstagram,
// } from "react-icons/tb";

const Home = () => {
  const [open, setOpen] = useState(false);
 
  const Font ={
    fontFamily: 'Roboto, sans-serif'
  }

  
  return (
    <>
     <div>
     <div
        className="p-5 h-full w-[1850px] sm:h-full sm:w-[330px] sm:overflow-hidden pt-7 mt-2
         bg-blue-700 border-b-0 border-r-0 border-l-0
          border-t-2 rounded-t-xl m-auto sm:mt-0"
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
              className="cursor-pointer sm:cursor-pointer text-white sm:text-white
              sm:text-2xl text-4xl float-right font-normal hover:text-gray sm:float-right"
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
    <div className='w-[1850px] sm:w-[330px]  h-[820px] sm:h-full bg-slate-200 flex space-x-4 sm:flex
     sm:flex-col justify-center m-auto pb-9 sm:overflow-hidden'>
  <img src={image} alt="my image" className='h-[750px] sm:h-[150px] sm:w-[210px] sm:m-auto'/>
<div className='flex flex-col pt-56 gap-5 sm:pt-2'>
  <h3 className='text-7xl font-bold leading-normal relative right-20 sm:text-3xl sm:font-bold sm:left-4 sm:top-8' style={Font}>{homeText.first}</h3>
    <h2 className='text-7xl font-bold leading-normal relative right-20 sm:text-3xl sm:right-3 sm:text-center sm:top-8' style={Font}>{homeText.second}</h2>
    <a href='https://github.com/Joel0007tech' className='font-semibold w-[350px] sm:w-[200px]
     p-7 bg-blue-700 text-white mt-10 mb-2 text-4xl sm:text-lg sm:m-auto sm:p-3
     hover:text-blue-700 hover:bg-slate-400 border-[3px]
      rounded-xl sm:rounded-md text-center relative right-14 sm:relative sm:right-3 sm:top-10' style={Font}>
      {link.firstText}</a>
  </div>

</div>
</div>
    </>
  )
}

export default Home




