import React, { useState } from 'react'
import image from "../assets/FB_IMG_1632361671640__2_-removebg-preview.png"
import { Link} from "react-router-dom"
import { link,homeText } from '../constants'
import {FaStream} from "react-icons/fa"

const Home = () => {
  const [open, setOpen] = useState(false);
  const color ={
    backgroundColor:"#383838"
  }
  return (
    <>
     <div>
     <div
        className="pt-6 h-full w-full sm:h-full sm:w-full sm:overflow-hidden"
        style={color}
      >
        <div
          className=" p-6 overflow-hidden
            sm:border-b-2 sm:border-white sm:rounded-b-md"
        >
          <div className="sm:pb-3 sm:pt-3 sm:flex">
            <img
              src={image}
              alt=""
              className="px-20 fixed sm:fixed sm:top-8 sm:right-24"
            />
            <FaStream
              className="cursor-pointer sm:cursor-pointer text-white sm:text-white
              sm:text-2xl text-4xl fixed sm:fixed sm:right-10 right-60 font-normal sm:top-11 "
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
            pt-18"
            >
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/services">Our services</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/works">Our works</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/team">Team</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/card">Card</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/puzzle">Puzle</Link>
              </li>
            </ul>
          </div>
        )}
        </div>
    <div className='w-full h-full bg-slate-200 flex space-x-4'>
  <img src={image} alt="my image" className='h-[450px]'/>
  <div className='flex flex-col pt-16'>
  <h3 className='text-6xl font-bold leading-normal'>{homeText.first}</h3>
    <h2 className='text-6xl font-bold leading-normal relative right-9'>{homeText.second}</h2>
    <a href='' className='font-semibold w-[200px]
     p-5 bg-blue-700 text-white mt-16 text-2xl
     hover:text-blue-700 hover:bg-slate-400 border-[3px] rounded-xl'>
      {link.firstText}</a>
  </div>
</div>
</div>
    </>
  )
}

export default Home




