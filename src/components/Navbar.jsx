import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
// import logo from "../assets/logo.png";
import { navItems } from "../constant";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="nav sticky backdrop-blur-lg top-0 py-1 z-50 border-b">
      <div className="container px-3 mx-auto relative text-sm w-full">
        <div className="flex items-center w-full justify-around">
          <div className="flex justify-center items-center ml-11 mr-11 p-5 text-xxl">
            <ul className="hidden lg:flex ml-14 space-x-12 font-medium">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:underline transition-all duration-300"
                >
                  <NavLink to={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex justify-center item-center space-x-12 p-2">
            <a
              href="#"
              className="bg-gradient-to-r text-[13px] from-neutral-300 to bg-neutral-500 px-3 py-2 border rounded-md font-semibold hover:text-white transition-all duration-500 ease-in-out hover:bg-neutral-700"
            >
              Login or Register
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end py-4">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-netural-900 w-full p-12 flex flex-col justify-center items-left lg:hidden bg-neutral-100 pb-20">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-[14px] font-medium">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-[14px] font-medium py-2"
              >
                Login or Register
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
