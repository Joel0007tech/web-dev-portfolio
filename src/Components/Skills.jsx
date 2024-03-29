import React, { useState } from "react";
import image from "../assets/c63cdec905e7964a907dc513fbda7f36.jpg";
import { Link } from "react-router-dom";
import { navTexts } from "../constants";
import { FaUserAlt, FaArrowRight } from "react-icons/fa";
import ace from "../assets/ace project.png";
import hoobank from "../assets/hoobank project.png";
import architecture from "../assets/architecture project.png";
import counter from "../assets/counter app.png";
import ctmaid from "../assets/ctmaid project.png";
import "./style.css";


const Skills = () => {
  const [open, setOpen] = useState(false);

  const Font = {
    fontFamily: "Roboto, sans-serif",
  };
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
          className="text-blue-700 font-bold text-3xl pt-4 text-center sm:text-lg"
          style={Font}
        >
          Take A Glance At My Past Projects;
        </h3>
        <div>
          <div className="mobile-items hide pb-7">
            <div className="first__mobile-items">
              <img
                className="w-[250px] h-[180px] hover:shadow-sm"
                src={hoobank}
                alt="placeholder"
              />
              <div>
                <h3
                  className="text-center text-blue-700 font-semibold"
                  style={Font}
                >
                  Hoobank project
                </h3>
                <p
                  className="text-blue-700 text-sm leading-normal font-semibold text-center"
                  style={Font}
                >
                  A banking app that provides new automated
                  <br /> banking system for easier and efficient
                  <br /> useage by the people.
                </p>
                <div className="flex justify-center mt-3">
                  <a
                    href="https://bank-app-ten-mu.vercel.app/"
                    className="bg-blue-700 text-white flex pr-7 pl-7 rounded pt-1 pb-1"
                    style={Font}
                  >
                    visit website
                  </a>
                </div>
              </div>
            </div>
            <div className="second__mobile-items">
              <img
                className="w-[250px] h-[180px]"
                src={ace}
                alt="placeholder"
              />
              <div>
                <h3
                  className="text-center text-blue-700 font-semibold"
                  style={Font}
                >
                  Ace Project
                </h3>
                <p
                  className="text-blue-700 text-sm leading-normal font-semibold text-center"
                  style={Font}
                >
                  A website containing details about works
                  <br />
                  done by a group of techies.
                  <br />
                </p>
                <div className="flex justify-center mt-3">
                  <a
                    href="https://practice-project-chi.vercel.app/"
                    className="bg-blue-700 text-white flex pr-7 pl-7 rounded pt-1 pb-1"
                    style={Font}
                  >
                    visit website
                  </a>
                </div>
              </div>
            </div>
            <div className="third__mobile-items">
            <img
                className="w-[250px] h-[180px] hover:shadow-sm"
                src={architecture}
                alt="placeholder"
              />
              <div>
                <h3 className="text-center text-blue-700 font-semibold"
                  style={Font}>Architecture website</h3>
                <p className="text-blue-700 text-sm leading-normal font-semibold text-center"
                  style={Font}>This is an architecture website, that
                    <br />
                    showcase architectural activities.</p>
                  <div className="flex justify-center mt-3">
                  <a
                    href="https://architecture-nine.vercel.app/"
                    className="bg-blue-700 text-white flex pr-7 pl-7 rounded pt-1 pb-1"
                    style={Font}
                  >
                    visit website
                  </a>
                </div>
              </div>
            </div>
            <div className="fourth__mobile-items">
              <img
                  className="w-[250px] h-[180px]"
                  src={ctmaid}
                  alt="placeholder"
                />
                 <div>
                <h3 className="text-center text-blue-700 font-semibold"
                  style={Font}>CTmaid website</h3>
                <p className="text-blue-700 text-sm leading-normal font-semibold text-center"
                  style={Font}>A website for waste recycling ,
                  and every<br/> other things needed to be done,
                  to keep<br/> the environment safe.</p>
                  <div className="flex justify-center mt-3">
                  <a
                    href="https://ct-maid-synergy.vercel.app/"
                    className="bg-blue-700 text-white flex pr-7 pl-7 rounded pt-1 pb-1"
                    style={Font}
                  >
                    visit website
                  </a>
                </div>
                </div>
              </div>
              <div className="flex flex-row m-auto gap-1">
              <a
                href="https://github.com/Joel0007tech"
                target={"_blank"}
                className="text-blue-700 cursor-pointer text-md font-bold underline"
                style={Font}
              >
                view more
              </a>
              <FaArrowRight className="relative top-1.5 text-blue-700" />
            </div>
          </div>
          <div className="flex flex-col p-20 gap-14 items-center sm:hidden 2xl:block">
            <div
              className="relative w-[600px] h-[450px] right-40
           transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                className="w-[600px] h-[450px] hover:shadow-sm"
                src={hoobank}
                alt="placeholder"
              />
              <div
                className="absolute top-40 flex gap-4 w-full h-full left-7 sm:hidden 2xl:block
       items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex flex-col bg-white border rounded-t-md p-3">
                  <h3 className=" text-xl font-bold text-black" style={Font}>
                    Hoobank project
                  </h3>
                  <p
                    className="text-black text-sm leading-normal font-semibold"
                    style={Font}
                  >
                    A banking app that provides new
                    <br />
                    automated banking system for easier
                    <br />
                    and efficient useage by the people.
                  </p>
                </div>
                <a
                  href="https://bank-app-ten-mu.vercel.app/"
                  className="text-center bg-black py-3 px-9 sm:py-2 sm:my-4
              hover hover:bg-white hover:text-black text-white font-semibold sm:text-sm
             w-[170px] sm:w-[250px] h-[50px] sm:h-[40px] m-auto rounded-lg"
                  style={Font}
                >
                  visit website
                </a>
              </div>
            </div>
            <div
              className="relative w-[600px] h-[450px] left-40 
    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  hover:bg-black
    sm:hidden 2xl:block"
            >
              <div>
                <img
                  className="w-[600px] h-[450px]"
                  src={ace}
                  alt="placeholder"
                />
              </div>
              <div
                className="absolute top-40 gap-4 w-full h-full left-7 flex
       items-center justify-center opacity-0 hover:opacity-50 transition-opacity duration-300"
              >
                <div className="flex flex-col bg-black p-3 border rounded-t-md">
                  <h3 className="text-xl text-white font-bold" style={Font}>
                    Ace Project
                  </h3>
                  <p className="text-sm leading-normal text-white font-semibold">
                    A website containing details about works
                    <br />
                    done by a group of techies.
                    <br />
                  </p>
                </div>
                <a
                  href="https://practice-project-chi.vercel.app/"
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
          <div className="flex flex-col p-20 gap-14 items-center sm:hidden 2xl:block">
            <div
              className="relative w-[600px] h-[450px] right-40
           transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                className="w-[600px] h-[450px] hover:shadow-sm"
                src={architecture}
                alt="placeholder"
              />
              <div
                className="absolute top-40 flex gap-4 w-full h-full left-7 sm:hidden 2xl:block
       items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex flex-col bg-orange-600 p-3 border rounded-t-md">
                  <h3 className="text-white text-xl font-bold" style={Font}>
                    Architecture
                  </h3>
                  <p
                    className="text-white text-sm leading-normal font-semibold"
                    style={Font}
                  >
                    This is an architecture website, that
                    <br />
                    showcase architectural activities.
                  </p>
                </div>
                <a
                  href="https://architecture-nine.vercel.app/"
                  className="text-center bg-orange-600 py-3 px-9 sm:py-2 sm:my-4
               hover:bg-white hover:text-orange-600 text-white font-semibold sm:text-sm
             w-[170px] sm:w-[250px] h-[50px] sm:h-[40px] m-auto rounded-lg"
                  style={Font}
                >
                  visit website
                </a>
              </div>
            </div>
            <div
              className="relative w-[600px] h-[450px] left-40 
    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
    "
            >
              <div>
                <img
                  className="w-[600px] h-[450px]"
                  src={ctmaid}
                  alt="placeholder"
                />
              </div>
              <div
                className="absolute top-40 gap-4 w-full h-full left-7 flex
       items-center justify-center opacity-0 hover:opacity-50 transition-opacity duration-300"
              >
                <div className="flex flex-col bg-slate-800 rounded-t-md p-3">
                  <h3 className="text-xl text-white font-bold" style={Font}>
                    CTmaid Synergy
                  </h3>
                  <p
                    className="text-sm leading-normal text-white font-semibold"
                    style={Font}
                  >
                    A website for waste recycling ,<br />
                    and every other things needed to be done , <br />
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
            <div
              className="relative w-[600px] h-[450px] right-40 sm:hidden 2xl:block
           transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                className="w-[600px] h-[450px] hover:shadow-sm"
                src={counter}
                alt="placeholder"
              />
              <div
                className="absolute top-40 flex gap-4 w-full h-full left-7
       items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex flex-col bg-white border rounded-t-md p-3">
                  <h3 className="text-blue-700 text-xl font-bold" style={Font}>
                    Counter App
                  </h3>
                  <p
                    className="text-blue-700 text-sm leading-normal font-semibold"
                    style={Font}
                  >
                    An app that increases the number when (+) <br />
                    is been clicked on, and reduce the number, <br />
                    when (-) is been clicked on.
                  </p>
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
            <div className="relative float-right flex gap-2 left-60 bottom-20">
              <a
                href="https://github.com/Joel0007tech"
                target={"_blank"}
                className="text-blue-700 cursor-pointer text-xl font-bold underline"
                style={Font}
              >
                view more
              </a>
              <FaArrowRight className="relative top-2 text-blue-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
