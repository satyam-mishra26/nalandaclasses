import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.jpg'
import img1 from '../assets/Nalanda.png'
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleMobileMenu = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white w-full  ") +
        " z-50 flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}

        <div className="w-full text-center lg:w-auto lg:static lg:block lg:justify-start">
          <NavLink
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            to='/'
          >
            <img className="w-20 h-10 mr-2 rounded-xl cursor-pointer lg:w-auto lg:static lg:block lg:justify-start" src={img1} alt="" />
          </NavLink>
          <div
            className={
              "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent text-gray-800 block lg:hidden outline-none focus:outline-none absolute top-0 right-0 mr-4 mt-4"
            }
            onClick={toggleMobileMenu}
          >
            <FaBars /> {/* Render the menu icon */}
          </div>
        </div>

        {/* Navigation */}
        <div
          className={
            (navbarOpen ? "flex flex-col" : "hidden") + // Toggle mobile menu visibility
            " lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
          }
        >
          <ul className="flex flex-col lg:flex-row list-none mx-auto">
            <li className="flex items-center">
              <NavLink
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to='/About'
              >
                About
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to='/Courses'
              >
                Our Courses
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to='/Gallery'
              >
                Gallery
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to='/Toopers'
              >
                Toppers
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to='/Blog'
              >
                Blog
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to='/Contact'
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">

              <button
                className={
                  (props.transparent
                    ? "bg-white text-gray-800 active:bg-gray-100"
                    : "bg-pink-500 text-white active:bg-pink-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
                to='/Contact'
              >
                Enquiry
              </button>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
