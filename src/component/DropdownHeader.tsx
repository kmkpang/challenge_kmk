import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Avatar from "./Avatar";
import profileImg from'../assets/image/Picture.png';

const DropdownHeader = () => {
  return (
    <div className="relative inline-block text-left">
      <button 
        type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
        className="flex w-full justify-center item-center gap-x-1.5 rounded-full bg-[#EEEEEE] px-1 py-1 text-xl text-[#212121] shadow-sm hover:bg-gray-50">
        <Avatar image={profileImg} height="10" width="10"/>
        <div className="w-7 h-full py-2">
          <IoIosArrowDown />
        </div>
      </button>
    </div>

  );
};

export default DropdownHeader;