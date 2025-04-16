import React from "react";

const Button = ({ title, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`px-2 py-1 rounded-md border border-blue-800 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
