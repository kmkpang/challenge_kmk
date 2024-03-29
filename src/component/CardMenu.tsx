/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Avatar from "./Avatar";

// component
import Star from "./Star";
import Badge from "./Badge";
import Divider from "./Divider";
import Menu from "./Menu";

// image
import profileImg from'../assets/image/Picture.png';
import badge from'../assets/image/Badge.svg';

const CardMenu = () => {

  const badges = [
    { text: "Agent", bgColor: "bg-[#0277BD]" },
    { text: "Owner", bgColor: "bg-[#4527A0]" },
    { text: "Developer", bgColor: "bg-[#F9A825]" },
  ]

  const RenderBadges = () => {
    return badges.map((badge, index) => {
      return (
        <Badge key={index} text={badge.text} bgColor={badge.bgColor} />
      )
    })
  }

  return (
    <div id="sidebar" className={`mt-2 sm:mt-16 block sm:absolute top-30 left-0 sm:w-64 w-full sm:h-screen`} aria-label="Sidebar">
      <div className="m-10 py-5 right-0 mt-2 sm:w-[300px] w-auto origin-top-right rounded-[20px] bg-white shadow-xl focus:outline-none border border-[#E0E0E0]">
        <div className="py-1 flex justify-center item-center relative">
          <Avatar image={profileImg} height="20" width="20"/>
          <span className="absolute bottom-0 -mr-12 flex h-6 w-6 rounded-full ring-4 ring-white">
            <img src={badge} alt="badge" />
          </span>
        </div>
        <div className="text-center font-bold text-2xl py-2">
          Jon Snow
        </div>
        <div className="pb-1">
          <Star star={4}/>
        </div>
        <div className="py-2 flex justify-center item-center">
          { RenderBadges() }
        </div>
        <Divider />
        <Menu />
      </div>
    </div>
  );
};

export default CardMenu;