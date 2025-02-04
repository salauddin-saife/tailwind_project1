import React from "react";
import Flex from "./Flex";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const InputCard = ({input_text} ) => {
  return (
    <div >
      <Flex className={"gap-x-10"}>
        <div>
          <Flex className={"gap-x-3 items-center"}>
            <CiLocationOn className="text-web_green  text-[20px] font-extrabold items-center text-center" />
            <p className="font-nunito font-bold text-[20px] leading-[26px] ">{input_text}</p>
            <IoIosArrowDown className="text-web_green font-semibold" />
          </Flex>
          <p className="text-[16px] font-normal text-font_paragraph leading-[26px] py-[5px] px-[5px] font-nunito  ">Enter your location</p>
        </div>
        
      </Flex>
    </div>
  );
};

export default InputCard;
