import React, { useState } from "react";

type Props = {
  color: string,
  textColor: string,
  text: string,
  border?: string
}

const Button = ({color, textColor, text, border}: Props) => {
  return (
    <button className={`px-4 h-[36px] inline-block rounded-full ${color} ${textColor} font-medium text-sm ${border}`}>{text}</button>
  );
};

export default Button;