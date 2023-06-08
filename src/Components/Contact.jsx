import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/FB_IMG_1632361671640__2_-removebg-preview.png";
import { navTexts } from "../constants";
import { FaUserAlt } from "react-icons/fa";
import {
  TbBrandWhatsapp,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandInstagram,
} from "react-icons/tb";

const Contact = () => {
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
        <div className=" overflow-hidden">
          <div className="sm:flex flex justify-between">
            <img
              src={image}
              alt=""
              className="w-[90px] sm:w-[50px] h-[50px] sm:h-[30px]"
            />
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
            pb-10"
              style={Font}
            >
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/" target="_blank">
                  {navTexts.first}
                </Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/about" target="__blank">
                  {navTexts.second}
                </Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/skills" target="_blank">
                  {navTexts.third}
                </Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/contact" target="_blank">
                  {navTexts.fourth}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="bg-slate-200 pt-5 w-[1850px] m-auto">
        <h3
          className="text-blue-700 font-bold text-2xl text-center"
          style={Font}
        >
          Have any questions ? Reach out to me below;
        </h3>
        <form className="flex flex-col pt-3 gap-2">
          <input type={"email"} placeholder="Email" className="m-auto pb-6 w-[550px] pt-6 pl-3 text-white text-lg
           bg-blue-700 font-semibold rounded-t-md" style={Font}/>
         <input type={"email"} placeholder="your query" className="m-auto pb-60 w-[550px] pt-2 pl-3 text-white text-lg
          bg-blue-700 font-semibold rounded-b-md" style={Font}/>
        </form>
        <div className=" flex justify-center mt-5">
        <a
              href=""
              className="text-center bg-blue-700 py-3 px-9 sm:py-2 sm:my-4 text-white
               hover:bg-blue-700 hover:text-slate-400 font-semibold sm:text-sm
             w-[170px] sm:w-[250px] h-[50px] sm:h-[40px] rounded-lg "
              style={Font}
            >
               SUBMIT
            </a>
        </div>
        
        <div className="pt-5 flex flex-col justify-center pb-7 mt-3">
          <h3
            className="text-blue-700 text-center font-semibold text-2xl"
            style={Font}
          >
            You can as well reach out to me below;
          </h3>
          <div className="flex flex-row m-auto gap-4 pt-3">
            <TbBrandWhatsapp className="text-white text-5xl fill-green-600 cursor-pointer" />
            <TbBrandLinkedin className="text-white text-5xl fill-blue-600 cursor-pointer" />
            <TbBrandTwitter className="text-blue-600 text-5xl fill-blue-600 cursor-pointer" />
            <TbBrandInstagram className="text-white text-5xl fill-red-700 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
