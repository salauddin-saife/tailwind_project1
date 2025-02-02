

import React from "react";
import Contain from "../components/Contain";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Logo_img from "../assets/logo_nav.png";
import Li from "../components/Li";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white">
        <Contain className="h-[143px] ">
          <Flex className="items-center w-full h-full">
            {/* Logo Section */}
            <div className="w-2/12 h-full bg-white flex items-center justify-center">
              <Image src={Logo_img}  />
            </div>

            {/* Navigation Links */}
            <div className="w-8/12 h-full bg-white flex items-center justify-center">
              <ul className="flex gap-x-10 h-full items-center font-poppins text-[#616161] font-normal text-[16px]">
                <Li liText="Home" />
                <Li liText="Tours" />
                <Li liText="Bookings" />
                <Li liText="Pages" />
                <Li liText="Features" />
                <Li liText="Blog" />
              </ul>
            </div>

            {/* Right Section */}
            <div className="w-2/12 h-full bg-white flex items-center justify-center">
            <Button/>
            </div>
          </Flex>
        </Contain>
      </nav>
    </div>
  );
};

export default Navbar;
