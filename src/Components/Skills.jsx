import React,{useState} from 'react'
import image from "../assets/FB_IMG_1632361671640__2_-removebg-preview.png"
import { Link} from "react-router-dom"
import {navTexts } from '../constants'
import {FaUserAlt} from "react-icons/fa"
import ace from "../assets/ace project.png"
import hoobank from "../assets/hoobank project.png"
import architecture from "../assets/architecture project.png"
import counter from "../assets/counter app.png";
import ctmaid from "../assets/ctmaid project.png"

const Skills = () => {
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
              sm:text-2xl text-4xl fixed sm:fixed top-10 sm:right-10 right-60 font-normal sm:top-11 hover:text-gray"
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
        <div className='bg-slate-200'>
        <h3 className="text-blue-700 font-bold text-xl pt-4" style={Font}>
          Take A Glance At My Past Projects;
        </h3>

        <div className="flex flex-col p-20 gap-14 items-center ">
          <div className="relative w-[600px] h-[450px] right-40
           transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <img
        className="w-[600px] h-[450px] hover:shadow-sm"
        src={hoobank}
        alt="placeholder"
      />
      <div className="absolute top-40 flex gap-4 w-full h-full left-7
       items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
     <div className="flex flex-col bg-white border rounded-t-md p-3">
    <h3 className=" text-xl font-bold text-black" style={Font}>Hoobank project</h3>
    <p className="text-black text-sm leading-normal font-semibold" style={Font}>A banking app that provides new<br/>
    automated banking system for easier<br/>
    and efficient useage by the people.</p>
     </div>
     <a
              href=""
              className="text-center bg-black py-3 px-9 sm:py-2 sm:my-4
              hover hover:bg-white hover:text-black text-white font-semibold sm:text-sm
             w-[170px] sm:w-[250px] h-[50px] sm:h-[40px] m-auto rounded-lg"
              style={Font}
            >
               visit website
            </a>
      </div>
    </div>
    <div className="relative w-[600px] h-[450px] left-40 
    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  hover:bg-black
    ">
      <div>
      <img
        className="w-[600px] h-[450px]"
        src={ace}
        alt="placeholder"
      />
    </div>
      <div className="absolute top-40 gap-4 w-full h-full left-7 flex
       items-center justify-center opacity-0 hover:opacity-50 transition-opacity duration-300">
       <div className="flex flex-col bg-black p-3 border rounded-t-md">
    <h3 className="text-xl text-white font-bold" style={Font}>Ace Project</h3>
    <p className="text-sm leading-normal text-white font-semibold">A website containing details about works<br/>
    done by a group of techies.<br/>
    </p>
     </div>
     <a
              href=""
              className="text-center bg-white py-3 px-9 sm:py-2 sm:my-4
              hover hover:bg-black hover:text-white text-black font-semibold sm:text-sm
             w-[170px] sm:w-[250px] h-[50px] sm:h-[40px] m-auto rounded-lg"
              style={Font}
            >
               visit website
            </a>
    
      </div>
    </div>
    </div>
    <div className="flex flex-col p-20 gap-14 items-center ">
          <div className="relative w-[600px] h-[450px] right-40
           transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <img
        className="w-[600px] h-[450px] hover:shadow-sm"
        src={architecture}
        alt="placeholder"
      />
      <div className="absolute top-40 flex gap-4 w-full h-full left-7
       items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
     <div className="flex flex-col bg-orange-600 p-3 border rounded-t-md">
    <h3 className="text-white text-xl font-bold" style={Font}>Architecture</h3>
    <p className="text-white text-sm leading-normal font-semibold" style={Font}>This is an architecture website, that<br/>
    showcase architectural activities.</p>
     </div>
     <a
              href=""
              className="text-center bg-orange-600 py-3 px-9 sm:py-2 sm:my-4
               hover:bg-white hover:text-orange-600 text-white font-semibold sm:text-sm
             w-[170px] sm:w-[250px] h-[50px] sm:h-[40px] m-auto rounded-lg"
              style={Font}
            >
               visit website
            </a>
      </div>
    </div>
    <div className="relative w-[600px] h-[450px] left-40 
    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
    ">
      <div>
      <img
        className="w-[600px] h-[450px]"
        src={ctmaid}
        alt="placeholder"
      />
    </div>
      <div className="absolute top-40 gap-4 w-full h-full left-7 flex
       items-center justify-center opacity-0 hover:opacity-50 transition-opacity duration-300">
       <div className="flex flex-col bg-slate-800 rounded-t-md p-3">
    <h3 className="text-xl text-white font-bold" style={Font}>CTmaid Synergy</h3>
    <p className="text-sm leading-normal text-white font-semibold" style={Font}>
      A website for waste recycling ,<br/>
     and every other things needed to be done , <br/>
     to keep the environment safe. 
    </p>
     </div>
     <a
              href=""
              className="text-center bg-slate-900 py-3 px-9 sm:py-2 sm:my-4
               hover:bg-white hover:text-slate-900 text-white font-semibold sm:text-sm
             w-[170px] sm:w-[250px] h-[50px] sm:h-[40px] m-auto rounded-lg"
              style={Font}
            >
               visit website
            </a>
    
      </div>
    </div>
    <div className="relative w-[600px] h-[450px] right-40
           transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <img
        className="w-[600px] h-[450px] hover:shadow-sm"
        src={counter}
        alt="placeholder"
      />
      <div className="absolute top-40 flex gap-4 w-full h-full left-7
       items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
     <div className="flex flex-col bg-white border rounded-t-md p-3">
    <h3 className="text-blue-700 text-xl font-bold" style={Font}>Counter App</h3>
    <p className="text-blue-700 text-sm leading-normal font-semibold" style={Font}>
     An app that increases the number when (+) <br/>
     is been clicked on, and reduce the number, <br/>
     when (-) is been clicked on.</p>
     </div>
     <a
              href=""
              className="text-center bg-white py-3 px-9 sm:py-2 sm:my-4 text-blue-700
               hover:bg-blue-700 hover:text-white font-semibold sm:text-sm
             w-[170px] sm:w-[250px] h-[50px] sm:h-[40px] m-auto rounded-lg"
              style={Font}
            >
               visit website
            </a>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Skills
