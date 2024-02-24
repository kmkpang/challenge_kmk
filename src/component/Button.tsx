import React, { useState } from "react";

type Props = {
  color: string,
  textColor: string,
  text: string,
  border?: string
}

const Button = ({color, textColor, text, border}: Props) => {
  return (
    <button className={`py-1 px-4 inline-block rounded-full bg-[${color}] text-[${textColor}] font-medium text-sm ${ border && 'border-1'} border-[${border}]`}>{text}</button>
  );
};

export default Button;