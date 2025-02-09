import React from "react";
import { IoMdContact } from "react-icons/io";
import Contain from "./Contain";

const Number_Box = ({className, Icon, Number_Box_h1, Number_Box_h2}) => {
  return (
    <Contain>
      <div className={`align-top text-left  pointer-events-auto ${className}`}>
        <div className="w-[275px] h-[325px] group-hover:text-white bg-white hover:bg-web_green rounded-2xl shadow-[0px_0px_7px_-4px_rgba(0,0,0,0.75)] hover:shadow-[0px_0px_25px_-4px_rgba(0,0,0,0.75)] group duration-300 pointer-events-auto">
          <div className="pl-[68px] pt-[80px] pointer-events-auto">
            {Icon && <Icon className="text-web_green  scale-[5] hover:scale-[6] p-[3px] bg-web_green/10  group-hover:bg-white rounded-[2px] duration-300 group-hover:text-web_green" />}
          </div>
          <div className="pt-[80px] pl-[30px] pointer-events-auto">
            <div className="text-font_primary font-poppins text-[40px] font-semibold tracking-[0.2px] group-hover:text-white">
          <h1>{Number_Box_h1}</h1>
            </div>
            <div className="text-font_paragraph font-poppins font-medium text-[16px] tracking-[0.2px] group-hover:text-white">
              <h2>{Number_Box_h2}</h2>
            </div>
          </div>
        </div>
      </div>
    </Contain>
  );
};

export default Number_Box;

