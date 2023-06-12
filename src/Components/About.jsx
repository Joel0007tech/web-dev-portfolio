import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/FB_IMG_1632361671640__2_-removebg-preview.png";
import { link, navTexts} from "../constants";
import { FaUserAlt,FaHtml5,FaReact,FaCss3Alt, } from "react-icons/fa";
import { DiJavascript1} from "react-icons/di";
import {SiTailwindcss} from "react-icons/si";
import biography from "../assets/biography.jpg.jpg";
import blog from "../assets/blog.jpg.jpg";
import eCommerce from "../assets/e-commerce.jpg.jpg"
import branding from "../assets/branding.jpg.jpg";
import charity from "../assets/charity.jpg.jpg"

const About = () => {
  const [open, setOpen] = useState(false);

  const Font = {
    fontFamily: "Roboto, sans-serif",
  };
  return (
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
      <div className=" bg-slate-200 h-[820px] w-[1850px] m-auto sm:h-[1800px] sm:w-[330px] sm:overflow-hidden">
        <h3
          className="text-blue-700 font-bold text-center text-4xl pt-5 sm:text-2xl"
          style={Font}
        >
          About Me
        </h3>
        <div className="flex justify-center py-5 sm:flex sm:flex-col sm:gap-10">
          <div className="w-1/2 animate__animated animate__fadeInLeft flex flex-row justify-center">
            <img
              src={image}
              alt="vector"
              className="h-[250px] w-[350px] sm:relative sm:left-[100px] 2xl:block sm:hidden"
            />
          </div>
          <div className="2xl:w-1/2 animate__animated animate__fadeInRight sm:m-auto sm:w-full">
            <p
              className="text-blue-700 text-2xl relative right-24 2xl:pt-4 font-bold sm:relative
               sm:left-0 sm:text-lg sm:pt-0 sm:text-center sm:bottom-10"
              style={Font}
            >
              JOEL is a web developer, with <br className="sm:block 2xl:hidden"/>over 3 years of epeerience,
              <br className="2xl:block sm:hidden"/>
              in <br className="sm:block 2xl:hidden"/> developing websites and webApps,<br className="sm:block 2xl:hidden"/> for individuals,
               and <br className="2xl:block sm:hidden"/>
              companies, helping them achieve their<br className="sm:block 2xl:hidden"/>  aims and objectives.
              <br />
              I have experience in:
              <br />
              <span className="text-gray-500 font-bold">
                {" "}
                HTML, CSS, JAVASCRIPT, TAILWINDCSS, AND REACTjs.
              </span>
            </p>
            <div className="flex relative right-24 gap-3 sm:bottom-20 sm:justify-center sm:left-1">
              <FaHtml5 className="w-[100px] h-[200px] fill-red-600 sm:w-[50px]"/>
              <FaCss3Alt className="w-[100px] h-[200px] fill-blue-500 sm:w-[50px]"/>
              <DiJavascript1 className="w-[100px] h-[200px] sm:w-[50px]"/>
              <SiTailwindcss className="w-[100px] h-[200px] text-blue-400 sm:w-[50px]"/>
              <FaReact className="w-[100px] h-[200px] text-blue-400 sm:w-[50px]"/>
            </div>
            <div className="relative right-16 pt-5 sm:left-24 sm:relative sm:bottom-36">
              <a
                href=""
                className=" bg-blue-700 border rounded text-white font-bold sm:font-medium
      hover:text-blue-700 hover:bg-slate-400 pr-28 sm:pr-5 pl-28 sm:pl-5 pt-5
       sm:pt-2 pb-5 sm:pb-2 text-2xl sm:text-lg"
                style={Font}
              >
                {link.secondText}
              </a>
            </div>
          </div>
        </div>
        <div className="sm:relative sm:bottom-36">
        <h3 className="text-blue-700 font-bold text-center text-3xl pt-4 sm:text-xl" style={Font}>
          Few Out Of The Categories Of Websites(apps) I Will Develop For You;</h3>
        <div className="flex gap-4 p-6 sm:flex-col">
         <div>
          <img src={biography} alt="biography" className="w-[350px] h-[180px]"/>
          <div className="bg-white w-[150px] relative bottom-28 m-auto pt-2 pb-2">
            <p className="text-blue-700 font-bold text-center text-lg" style={Font}>Biography</p>
          </div>
         </div>
         <div>
          <img src={blog} alt="blog" className="w-[350px] h-[180px]"/>
          <div className="bg-white w-[150px] relative bottom-28 m-auto pt-2 pb-2">
            <p className="text-blue-700 font-bold text-center text-lg" style={Font}>Blog</p>
          </div>
         </div>
         <div>
          <img src={eCommerce} alt="e-commerce" className="w-[350px] h-[180px]"/>
          <div className="bg-white w-[150px] relative bottom-28 m-auto pt-2 pb-2">
            <p className="text-blue-700 font-bold text-center text-lg" style={Font}>E-commerce</p>
          </div>
         </div>
         <div>
          <img src={branding} alt="branding" className="w-[350px] h-[180px]"/>
          <div className="bg-white w-[150px] relative bottom-28 m-auto pt-2 pb-2">
            <p className="text-blue-700 font-bold text-center text-lg" style={Font}>Branding</p>
          </div>
         </div>
         <div>
          <img src={charity} alt="charity" className="w-[350px] h-[180px]"/>
          <div className="bg-white w-[150px] relative bottom-28 m-auto pt-2 pb-2">
            <p className="text-blue-700 font-bold text-center text-lg" style={Font}>Charity</p>
          </div>
         </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
