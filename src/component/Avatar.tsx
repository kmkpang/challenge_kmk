import React, { useState } from "react";

type Props = {
  image: string,
  height: string,
  width: string
}

const Avatar = ({image = '10', height = '10', width}: Props) => {
  return (
    <img className={`inline-block h-${height} w-${width} rounded-full`} src={image} alt=""></img>
  );
};

export default Avatar;