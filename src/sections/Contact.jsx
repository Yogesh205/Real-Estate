import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="contact"
        className={`${
          darkMode ? "dark bg-gray-700" : "light bg-red-100"
        } lg:w-[90%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
      >
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-6 rounded-xl w-full"
        >
          {/* Header */}
          <h2 className="text-3xl font-semibold text-black dark:text-white">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We would love to hear from you. Please fill out the form below or
            contact us directly.
          </p>

          {/* Form */}
          <form className="w-full mt-4 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 text-lg border rounded-md dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 text-lg border rounded-md dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 text-lg border rounded-md dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {/* Send Message Button */}
            <button
              type="submit"
              className="w-full p-4 bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-red-500 dark:text-white"
          >
            REACH US
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, saepe!
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-xl text-gray-600 text-justify dark:text-white"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            exercitationem, voluptates iure impedit error sint explicabo id.
            Sint, culpa tempore!
          </p>
          <button
            type="submit"
            className=" bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
