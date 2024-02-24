import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

// component
import DropdownHeader from "./DropdownHeader";

// image
import logo from'../assets/image/Logo.svg';
import messageCircle from'../assets/image/message-circle.svg';
import bell from'../assets/image/bell.svg';
import world from'../assets/image/world.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#browse", label: "Browse" },
    { href: "#room-finding", label: "Room Finding" },
    { href: "#article", label: "Article" },
    { href: "#tools", label: "Tools" },
    { href: "#about", label: "About" },
    { href: "#contact-us", label: "Contact Us" },
  ];
  return (
    <>
      <header className="md:px-8 lg:px-20 py-2 z-10 w-full border-b">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="">
            <img src={logo} alt="logo" />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-8 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="leading-normal text-base text-[#212121]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button className="w-full h-9 p-2 flex justify-center item-center ring-2 ring-[#B71C1C] rounded-full text-sm text-[#B71C1C] shadow-sm hover:bg-gray-50">
                Post Your Property
              </button>
            </li>
          </ul>
          <div className="flex gap-4 text-lg leading-normal max-lg:hidden">
            <div className="flex items-center justify-center gap-1">
              <div className="flex items-center justify-center rounded-full py-1 w-9 h-9">
                <img className="w-6 h-6" src={messageCircle} alt="messageCircle"/>
              </div>
              <div className="flex items-center justify-center rounded-full py-1 w-9 h-9">
                <img className="w-6 h-6" src={bell} alt="bell"/>
              </div>
              <div className="flex items-center justify-center rounded-full border py-1 w-9 h-9">
                <img className="w-5 h-5" src={world} alt="world"/>
              </div>
            </div>
            <DropdownHeader/>
          </div>
          
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed z-40 top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;