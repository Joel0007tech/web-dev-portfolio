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
          className="text-blue-700 font-bold text-xl text-center"
          style={Font}
        >
          Have any questions ? Reach out to me below;
        </h3>
        <form className="flex flex-col pt-3 gap-3">
          <div className="m-auto">
          <input type={"email"} placeholder="hello" className="h-[50px] w-[550px]"/>
          <p>Email</p>
          </div>
         
         <input type={"email"} placeholder="hello" className="m-auto h-[550px] w-[550px]"/>
        </form>
        <div className="pt-5 flex flex-col justify-center pb-7">
          <h3
            className="text-blue-700 text-center font-semibold text-xl"
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
