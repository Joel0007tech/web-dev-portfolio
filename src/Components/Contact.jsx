import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/c63cdec905e7964a907dc513fbda7f36.jpg";
import { navTexts } from "../constants";
import { FaUserAlt } from "react-icons/fa";
import {
  TbBrandWhatsapp,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandInstagram,
} from "react-icons/tb";
import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init();

const Contact = () => {
  const [open, setOpen] = useState(false);

  const Font = {
    fontFamily: "Roboto, sans-serif",
  };
  // function myFunction() {
  //   alert("message recorded");
  // }

  return (
    <div>
      <div
        className="px-5 py-3 h-full w-full sm:h-full sm:w-full sm:overflow-hidden mt-2 sm:mt-3
        border-b-4 border-r-0 border-l-0
         border-t-0 rounded-t-xl rounded-b-xl m-auto bg-slate-200"
      >
        <div className=" overflow-hidden">
          <div className="sm:flex flex justify-between">
            <img
              src={image}
              alt="img"
              className="w-[90px] sm:w-[50px] h-[50px] sm:h-[30px] rounded-t-md rounded-b-md relative top-2"
            />
            <FaUserAlt
               className="cursor-pointer sm:cursor-pointer text-blue-700 sm:text-blue-700
               sm:text-2xl text-4xl font-normal relative top-1"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        {open && (
          <div
          className="overflow-hidden
          sm:border-b-2 sm:border-white sm:rounded-b-md bg-blue-800"
          >
            <ul
             className="flex justify-center flex-col gap-6 sm:gap-4 text-center cursor-pointer
             p-4"
              style={Font} data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000"
            >
              <li className="text-white font-bold text-2xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/" target="_blank">
                  {navTexts.first}
                </Link>
              </li>
              <li className="text-white font-bold text-2xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/about" target="__blank">
                  {navTexts.second}
                </Link>
              </li>
              <li className="text-white font-bold text-2xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/skills" target="_blank">
                  {navTexts.third}
                </Link>
              </li>
              <li className="text-white font-bold text-2xl sm:text-sm sm:font-semibold hover:text-gray-500">
                <Link to="/contact" target="_blank">
                  {navTexts.fourth}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="w-full sm:w-full h-full sm:h-full bg-slate-200 flex flex-col space-x-4 sm:flex
     sm:flex-col justify-center m-auto 2xl:mb-10 sm:overflow-hidden mt-3">
        <h3
          className="text-blue-700 font-bold text-2xl text-center sm:text-xl"
          style={Font}
        >
          Have any questions ? Reach out to me below;
        </h3>
        <form className="flex flex-col pt-3 gap-2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <input type={"email"} placeholder="Email" className="m-auto pb-6 sm:pb-3 w-[550px] pt-6 sm:pt-3 pl-3 text-white text-lg sm:text-sm
           bg-blue-700 font-semibold rounded-t-md sm:w-[320px]" style={Font}/>
         <input type={"email"} placeholder="your query" className="m-auto pb-60 w-[550px] sm:w-[320px] pt-2 pl-3 text-white text-lg sm:text-sm
          bg-blue-700 font-semibold rounded-b-md" style={Font}/>
        </form>
        <div className=" flex justify-center mt-5">
        <a
              href=""
              className="text-center bg-blue-700 py-3 px-9 sm:py-2 sm:my-4 text-white
               hover:bg-blue-700 hover:text-slate-400 font-semibold sm:text-sm
             w-[170px] sm:w-[150px] h-[50px] sm:h-[40px] rounded-lg "
              style={Font}>
               SUBMIT
            </a>
        </div>
        <div className="pt-5 flex flex-col justify-center pb-7 mt-3">
          <h3
            className="text-blue-700 text-center font-semibold text-2xl sm:text-lg"
            style={Font}
          >
            You can as well reach out to me below;
          </h3>
          <div className="flex flex-row m-auto gap-4 pt-3">
            <TbBrandWhatsapp className="text-white text-5xl fill-green-600 cursor-pointer sm:text-4xl" />
            <TbBrandLinkedin className="text-white text-5xl fill-blue-600 cursor-pointer sm:text-4xl" />
            <TbBrandTwitter className="text-blue-600 text-5xl fill-blue-600 cursor-pointer sm:text-4xl" />
            <TbBrandInstagram className="text-white text-5xl fill-red-700 cursor-pointer sm:text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
