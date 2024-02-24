import React, { useState } from "react";

type Props = {
  image: string,
  height: string,
  width: string
}

const Avatar = ({image = 'h-10', height = 'h-10', width}: Props) => {
  return (
    <img className={`inline-block ${height} ${width} rounded-full`} src={image} alt=""></img>
  );
};

export default Avatar;