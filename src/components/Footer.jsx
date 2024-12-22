import React from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop8 from "../assets/images/prop8.jpg";
import prop7 from "../assets/images/prop7.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Destructure toggleDarkMode here

  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-800"
        } w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-200 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non
            illo beatae quos. Iure adipisci vitae at beatae! Tempora omnis ut
            incidunt est laudantium numquam commodi vel debitis? Perspiciatis,
            modi!
          </p>
          <div
            id="social=icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaFacebook className="size-5" />
            </div>

            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaInstagram className="size-5" />
            </div>

            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaTwitter className="size-5" />
            </div>

            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaYoutube className="size-5" />
            </div>
          </div>
          <h1 className="text-white mt-8">
            Copyright Real Estate, All Rights Reserved
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className="text-white size-5" />
            <p className="text-slate-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>

          <div className="flex justify-center items-center gap-3">
            <FaMobile className="text-white size-5" />
            <p className="text-slate-200">+91 999 999 9999</p>
          </div>

          <div className="flex justify-center items-center gap-3">
            <FaFax className="text-white size-5" />
            <p className="text-slate-200">9999999999</p>
          </div>

          <div className="flex justify-center items-center gap-3">
            <IoMdMail className="text-white size-5" />
            <p className="text-slate-200">demomail@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">
            Latest Properties
          </h1>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop8}
              alt="Latest Property"
              className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white">Villa with amazing view</h1>
              <p className="text-slate-400"> $287.98</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <img
              src={prop7}
              alt="Latest Property"
              className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white">Smart View from beach</h1>
              <p className="text-slate-400"> $487.98</p>
            </div>
          </div>
        </div>
      </footer>
      <div
        id="icon-box"
        className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6 lg:right-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6 text-white" />
        </Link>
      </div>
      <div>
        <button
          onClick={toggleDarkMode} // Now toggleDarkMode is defined here
          className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6"
        >
          {darkMode ? (
            <FaSun size={25} className="text-black" />
          ) : (
            <FaMoon size={25} className="text-black " />
          )}
        </button>
      </div>
    </>
  );
};

export default Footer;
