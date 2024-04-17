import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/" },
    { title: "Our Services", path: "/" },
    { title: "Contact Us", path: "/" },
    { title: "Our Gallery", path: "/" },
  ];

  return (
    <nav className=" md:flex md:justify-center md:px-0 px-4 z-50  fixed left-0 right-0 top-0 bg-gray-100 border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center justify-center  md:w-10/12 md:flex ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <img
              className="  h-10 w-full object-cover cursor-pointer"
              src={logo}
              alt="logo"
            />
          </a>
          <div className="md:hidden">
            <button
              className=" text-primary-400"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="  text-gray-600 md:font-semibold   hover:text-primary-400 md:text-[19px] text-[18px]"
                >
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
