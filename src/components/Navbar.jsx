import React, { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { HiMiniXMark } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      link: "Overview",
      path: "home",
    },
    {
      link: "Feature",
      path: "feature",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Pricing",
      path: "pricing",
    },
  ];
  return (
    <>
      {/* Navbar  */}
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto border-b text-primary fixed top-0 right-0 left-0">
        <div className="container text-lg font-medium mx-auto flex justify-between items-center">
          <div className="flex space-x-14 items-center">
            <a href="http://" className="text-2xl font-semibold">
              ChiranCHATWET
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => {
                return (
                  <a key={link} href={path} className="block">
                    {link}
                  </a>
                );
              })}
            </ul>
          </div>

          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" /> <span>Language</span>
            </a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign Up
            </button>
          </div>

          {/* menu button. only display on mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <HiMiniXMark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } `}
      >
        {navItems.map(({ link, path }) => {
          return (
            <a key={link} href={path} className="block">
              {link}
            </a>
          );
        })}
      </div>
    </>
  );
}

export default Navbar;
