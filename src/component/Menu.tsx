
import React, { useState } from "react";

import Badge from "./Badge";

// image
import user from'../assets/image/user-circle.svg'
import bell from'../assets/image/bell20x20.svg'
import message from'../assets/image/message-circle20x20.svg'
import heart from'../assets/image/heart.svg'

const Menu = () => {
  return (
    <ul className="px-3.5 py-3">
      <div className="px-2 pb-1 mt- text-[#757575] text-xs">General</div>
      <li className="h-9 flex justify-between gap-x-6 items-center rounded-full p-1.5 bg-[#A67E59] text-white">
        <div className="flex min-w-0 gap-x-3">
          <img className="h-5 w-5" src={user} alt="user" />
          <div className="min-w-0 flex-auto">
            <p className="text-sm">Account</p>
          </div>
        </div>
      </li>
      <li className="h-9 flex justify-between gap-x-6 items-center rounded-full p-1.5">
        <div className="flex min-w-0 gap-x-3">
          <img className="h-5 w-5" src={bell} alt="user" />
          <div className="min-w-0 flex-auto">
            <p className="text-sm">Notification</p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <Badge text="5" bgColor="bg-[#EF6C00]"/>
        </div>
      </li>
      <li className="h-9 flex justify-between gap-x-6 items-center rounded-full p-1.5">
        <div className="flex min-w-0 gap-x-3">
          <img className="h-5 w-5" src={message} alt="message" />
          <div className="min-w-0 flex-auto">
            <p className="text-sm">Chat</p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <Badge text="12" bgColor="bg-[#EF6C00]"/>
        </div>
      </li>
      <li className="h-9 flex justify-between gap-x-6 items-center rounded-full p-1.5">
        <div className="flex min-w-0 gap-x-3">
          <img className="h-5 w-5" src={heart} alt="heart" />
          <div className="min-w-0 flex-auto">
            <p className="text-sm">Favorite</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Menu;