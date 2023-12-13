import React from "react";
import Link from "next/link";

const Button = ({ href, children, classes, type, centered }) => {
  return (
    <button className={centered ? "flex justify-center" : ""}>
      <Link
        className={`rounded-lg ${
          type == "primary"
            ? "bg-neon-orange-500 text-seabreeze-500 hover:bg-neon-orange-600"
            : "border-2 border-hazard-blue-500 text-hazard-blue-100"
        } px-4 py-3 font-bold ${classes}`}
        href={href}
      >
        {children}
      </Link>
    </button>
  );
};

export default Button;
