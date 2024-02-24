import React, { useState } from "react";

type Props = {
  star: number,
}

const Star = ({star}: Props) => {

  const starCount = 5

  const renderStarFill = ()=> {
    const starFill = []
    for (let index = 0; index < star; index++) {
      starFill.push(<li key={index}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#F57F17"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#F57F17"
          className="h-5 w-5 text-warning">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      </li>)
    }
    return starFill
  }

  const renderStarNotFill = ()=> {
    const starNotFill = []
    for (let index = 0; index < (starCount - star); index++) {
      starNotFill.push(<li key={index}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#9E9E9E"
          className="h-5 w-5 text-warning">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      </li>)
    }
    return starNotFill
  }

  return (
    <ul className="flex justify-center item-center">
      { renderStarFill() }
      { renderStarNotFill() }
      <div className="h-5 w-5 flex">
        <span className="text-sm">{star.toFixed(1)}</span>
      </div>
    </ul>
  );
};

export default Star;