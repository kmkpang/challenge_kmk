import React, { useState } from "react";

type Props = {
  color: string,
  textColor: string,
  text: string,
  border?: string,
  onClick?: () => void
}

const Button = ({color, textColor, text, border, onClick}: Props) => {
  return (
    <button onClick={onClick} className={`px-4 h-[36px] inline-block rounded-full ${color} ${textColor} font-medium text-sm ${border}`}>{text}</button>
  );
};

export default Button;