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
        className="p-5 h-full w-[1850px] sm:h-full sm:w-[300px] sm:overflow-hidden pt-7 mt-2
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
      <div className=" bg-slate-200 h-[820px] w-[1850px] m-auto">
        <h3
          className="text-blue-700 font-bold text-center text-4xl pt-5"
          style={Font}
        >
          About Me
        </h3>
        <div className="flex justify-center py-5 sm:flex sm:flex-col sm:gap-10">
          <div className="w-1/2 animate__animated animate__fadeInLeft flex flex-row justify-center">
            <img
              src={image}
              alt="vector"
              className="h-[250px] w-[350px] sm:relative sm:left-[100px]"
            />
          </div>
          <div className="w-1/2 animate__animated animate__fadeInRight sm:m-auto">
            <p
              className="text-blue-700 text-2xl relative right-24 pt-4 font-bold"
              style={Font}
            >
              JOEL is a web developer, with over 3 years of epeerience,
              <br />
              in developing websites and webApps, for individuals, and <br />
              companies, helping them achieve their aims and objectives.
              <br />
              I have experience in:
              <br />
              <span className="text-gray-500 font-bold">
                {" "}
                HTML, CSS, JAVASCRIPT, TAILWINDCSS, AND REACTjs.
              </span>
            </p>
            <div className="flex relative right-24 gap-3">
              <FaHtml5 className="w-[100px] h-[200px] fill-red-600"/>
              <FaCss3Alt className="w-[100px] h-[200px] fill-blue-500"/>
              <DiJavascript1 className="w-[100px] h-[200px]"/>
              <SiTailwindcss className="w-[100px] h-[200px] text-blue-400"/>
              <FaReact className="w-[100px] h-[200px] text-blue-400"/>
            </div>
            <div className="relative right-28 pt-5">
              <a
                href=""
                className=" bg-blue-700 border rounded text-white font-bold
      hover:text-blue-700 hover:bg-slate-400 pr-28 pl-28 pt-5 pb-5 text-2xl"
                style={Font}
              >
                {link.secondText}
              </a>
            </div>
          </div>
        </div>
        <div>
        <h3 className="text-blue-700 font-bold text-center text-3xl pt-4" style={Font}>Few Out Of The Categories Of Websites(apps) I Will Develop For You;</h3>
        <div className="flex gap-4 p-6">
         <div>
          <img src={biography} alt="biography" className="w-[350px] h-[180px]"/>
          <div className="bg-white w-[150px] relative bottom-28 m-auto pt-2 pb-2">
            <p className="text-blue-700 font-bold text-center text-xl" style={Font}>Biography</p>
          </div>
         </div>
         <div>
          <img src={blog} alt="blog" className="w-[350px] h-[180px]"/>
          <div className="bg-white w-[150px] relative bottom-28 m-auto pt-2 pb-2">
            <p className="text-blue-700 font-bold text-center text-xl" style={Font}>Blog</p>
          </div>
         </div>
         <div>
          <img src={eCommerce} alt="e-commerce" className="w-[350px] h-[180px]"/>
          <div className="bg-white w-[150px] relative bottom-28 m-auto pt-2 pb-2">
            <p className="text-blue-700 font-bold text-center text-xl" style={Font}>E-commerce</p>
          </div>
         </div>
         <div>
          <img src={branding} alt="branding" className="w-[350px] h-[180px]"/>
          <div className="bg-white w-[150px] relative bottom-28 m-auto pt-2 pb-2">
            <p className="text-blue-700 font-bold text-center text-xl" style={Font}>Branding</p>
          </div>
         </div>
         <div>
          <img src={charity} alt="charity" className="w-[350px] h-[180px]"/>
          <div className="bg-white w-[150px] relative bottom-28 m-auto pt-2 pb-2">
            <p className="text-blue-700 font-bold text-center text-xl" style={Font}>Charity</p>
          </div>
         </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
