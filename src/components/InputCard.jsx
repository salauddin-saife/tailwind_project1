import React from "react";
import Flex from "./Flex";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";


const InputCard = () => {
  return (
    <div>
      <Flex>
        <CiLocationOn />
        
        <p>Location</p>
        <IoIosArrowDown />
        
      </Flex>
    </div>
  );
};

export default InputCard;
