
import React, { useState } from "react";

type Props = {
  bgColor: string,
  text: string
}

const Badge = ({bgColor, text}: Props) => {
  return (
    <span className={`inline-flex items-center rounded-xl px-2 py-1 mr-1 text-xs font-medium ${bgColor} text-[#FFFDE7]`}>{text}</span>
  );
};

export default Badge;