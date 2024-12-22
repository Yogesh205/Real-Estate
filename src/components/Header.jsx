import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import { useDarkMode } from "../components/DarkModeContext";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Properties", path: "properties" },
    { link: "Services", path: "services" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav
      className={`${
        darkMode ? "dark bg-black" : "light bg-[#f3f3f3]"
      } w-full gap-8 flex justify-between items-center lg:px-24 px-6 py-6 sticky top-0 z-30`} // Increased py-4 to py-6 and px-4 to px-6
    >
      {/* Logo */}
      <div id="Logo" className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="lg:w-[160px] w-[140px] dark:invert" // Slightly increased the logo size
        />
      </div>

      {/* Desktop Menu Items */}
      <ul className="lg:flex justify-center items-center gap-12 hidden">
        {" "}
        {/* Increased gap-10 to gap-12 */}
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              spy={true}
              smooth={true}
              offset={-100}
              className={`text-[20px] uppercase font-semibold cursor-pointer px-5 py-4 dark:text-white rounded-lg hover:bg-red-600 hover:text-white`} // Increased text size and padding
            >
              {item.link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center gap-4">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaXmark className="text-white text-2xl" />
          ) : (
            <FaBars className="text-black text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white p-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              spy={true}
              smooth={true}
              offset={-100}
              onClick={toggleMenu}
              className={`text-[20px] ${
                darkMode ? "text-black" : "text-black"
              } cursor-pointer hover:underline`} // Increased text size for mobile menu
            >
              {item.link}
            </Link>
          ))}
        </div>
      )}

      {/* Dark Mode Toggle Button */}
      <div className="flex items-center gap-6">
        <button onClick={toggleDarkMode} className="text-2xl">
          {darkMode ? (
            <FaUserCircle className="text-white" />
          ) : (
            <FaPhoneAlt className="text-black" />
          )}
        </button>

        {/* Mobile Number */}
        <div
          className={`text-[20px] ${darkMode ? "text-white" : "text-black"}`}
        >
          <a href="tel:+919999999999" className="hover:underline">
            +91 999 999 9999
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
