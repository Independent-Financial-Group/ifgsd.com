import React from "react";

// requires parent element to have group tailwind class for transition to work.
// Also require parent to have position relative.

const Popover = ({ text, top, right, bottom, left }) => {
  return (
    <div
      className={`group-transition-opacity absolute z-50 whitespace-nowrap rounded bg-black/75 p-2 text-xs text-white opacity-0  group-hover:opacity-100 group-hover:delay-500 group-hover:duration-200 ${top} ${right} ${bottom} ${left} scale-0 group-hover:scale-100`}
    >
      {text}
    </div>
  );
};

export default Popover;
