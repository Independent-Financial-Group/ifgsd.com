import React from "react";
// THIS COMPONENT IS USED FOR DISPLAYING A GENERAL GRID TILE ON ANY PAGE. YOU CAN SET THE GRID COL SPAN
// THE TILE TITLE AND THE CHILDREN CONTENT VIA PROPS

const GridTile = ({
  tileTitle,
  colSpan,
  children,
  scroll,
  titleHex = "bg-hazard-blue-500",
  icon,
}) => {
  return (
    <section className={`${colSpan} rounded-lg bg-white shadow`}>
      <div className={`mb-5 rounded-t-lg ${titleHex} py-2`}>
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          {icon}
          {tileTitle}
        </h2>
      </div>
      <div className={`px-4 pb-2 ${scroll && "h-[85%] overflow-y-auto"}`}>
        {children}
      </div>
    </section>
  );
};

export default GridTile;
