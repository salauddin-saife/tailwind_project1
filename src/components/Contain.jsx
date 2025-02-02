import React from "react";

const Contain = ({ children }) => {
  return (
    <div
      className="max-w-container bg-red-500 mx-auto text-center
    "
    >
      {children}
    </div>
  );
};

export default Contain;
