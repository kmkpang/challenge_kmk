
import React, { useState } from "react";

// image
import logo from'../assets/image/Logo-footer.svg';
import world from'../assets/image/world-footer.svg';
import SocialIcon1 from'../assets/image/Social-icon.svg';
import SocialIcon2 from'../assets/image/Social-icon-1.svg';
import SocialIcon3 from'../assets/image/Social-icon-2.svg';
import SocialIcon4 from'../assets/image/Social-icon-3.svg';


const Footer = () => {

  const navLinks = [
    { href: "#browse", label: "Browse" },
    { href: "#room-finding", label: "Room Finding" },
    { href: "#article", label: "Article" },
    { href: "#tools", label: "Tools" },
    { href: "#about", label: "About" },
    { href: "#contact-us", label: "Contact Us" },
  ];

  const top5Property = [
    { href: "#", label: "IDEO Sukhumvit - Bangna" },
    { href: "#", label: "BE BEST - Kaset - Ratchyothin" },
    { href: "#", label: "THE PEACH - Rama3" },
    { href: "#", label: "GOSET - Ratchada" },
    { href: "#", label: "XT Ekamai" },
  ];

  const top5 = [
    { href: "#", label: "BTS Siam" },
    { href: "#", label: "BTS National Stadium" },
    { href: "#", label: "BTS Ekkamai" },
    { href: "#", label: "MRT Rama 9" },
    { href: "#", label: "MRT Sukhummvit" },
  ];

  const ratePrice = [
    { href: "#", label: "Less than ฿5,000" },
    { href: "#", label: "฿5,000 - ฿10,000" },
    { href: "#", label: "฿10,000 - ฿20,000" },
    { href: "#", label: "฿20,000 - ฿30,000" },
    { href: "#", label: "More than ฿30,000" },
  ];

  const renderNavMenu = (menu: any[]) => {
    return menu.map((item, index) => {
      return (
        <p className="mb-1">
          <a href={item.href} className="text-white text-sm">{item.label}</a>
        </p>
      )
    })
  }

  return (
    <footer className="bg-[#A67E59] text-center text-neutral-600 lg:text-left ">
      <div className="mx-40 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex justify-center font-bold text-white md:justify-start">
              Prop
            </h6>
            { renderNavMenu(navLinks) }
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-bold text-white md:justify-start">
              Top 5 Property
            </h6>
            { renderNavMenu(top5Property) }
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-bold text-white md:justify-start">
              Top 5 BTS / MRT
            </h6>
            { renderNavMenu(top5) }
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-bold text-white md:justify-start">
              Condo for Rent
            </h6>
            { renderNavMenu(ratePrice) }
          </div>
        </div>
      </div>
      <div className="p-6 text-center md:px-8 lg:px-20 py-2 z-10 w-full">
        <div className="flex justify-between items-center max-container">
          <div className="flex items-center text-white text-sm">
            <span className="mr-6">
              <img src={logo} alt="" />
            </span>
            <span className="mr-6">Terms of Service</span>
            <span className="mr-6">Privacy Policy</span>
            <span className="mr-6">© 2023 Prop</span>
          </div>
          <div className="flex items-center text-white text-sm">
            <button className={`mr-8 flex items-center px-4 h-[36px] inline-block rounded-full text-[#A67E59] bg-white font-medium text-sm`}>
              <img src={world} alt="" />
              <span className="ml-2">English - THB</span>
            </button>
            <div className="flex justify-between items-center">
              <img className="px-4" src={SocialIcon1} alt="" />
              <img className="px-4" src={SocialIcon2} alt="" />
              <img className="px-4" src={SocialIcon3} alt="" />
              <img className="px-4" src={SocialIcon4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;