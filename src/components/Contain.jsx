import React from "react";

const Contain = ({ children, className }) => {
  return (
    <div
className={`max-w-container bg-white mx-auto  ${className}`}
    >
      {children}
    </div>
  );
};

export default Contain;
