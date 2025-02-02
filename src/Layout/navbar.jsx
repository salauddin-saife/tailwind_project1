import React from "react";
import Contain from "../components/Contain";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Logo_img from "../assets/logo_nav.png"


const Navbar = () => {
  return (
    <div>
      <nav className="">
        <Contain>
            <Flex>
                <div className="w-2/12 bg-white-500 h-[143px] ">
                <Image src={Logo_img} /> 
                </div>
                <div className="w-8/12 h-[143px] bg-green-500">
                <List/>
                </div>
                <div className="w-2/12 h-[143px] bg-red-500">Hello</div>
            </Flex>
            
            </Contain>
      </nav>
    </div>
  );
};

export default Navbar;
