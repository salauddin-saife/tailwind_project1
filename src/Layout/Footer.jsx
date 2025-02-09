import React from "react";
import Contain from "../components/Contain";
import Image from "../components/Image";
import Logo from "../assets/logo_nav.png";
import Flex from "../components/Flex";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import Li from "../components/Li";

const Footer = () => {
  return (
    <div>
      <section className="pt-[100px] pb-[100px]">
        <Contain>
          <Flex>
            <div className="w-6/12">
              <div className="pt-[100px]">
                <div className="">
                  <Image src={Logo} />
                </div>
                <div className="flex w-[312px] h-[48px] gap-x-6 pt-[20px]">
                  <div className="w-[48px] h-[48px] text-[40px] text-[#1877F2]">
                    <FaFacebook />
                  </div>
                  <div className="w-[48px] h-[48px] text-[40px]  text-[#1877F2]">
                    <FaTwitter />
                  </div>
                  <div className="w-[48px] h-[48px] text-[40px]  text-[#0A66C2]">
                    <FaLinkedin />
                  </div>
                  <div className="w-[48px] h-[48px] text-[40px] text-[#E60019]">
                    <FaPinterest />
                  </div>
                </div>
                <div className="text-[16px] font-normal leading-[30px] text-font_paragraph text-left font-poppins w-[344px] h-[90px] pt-[40px]">
                  <p>
                    Business Number : +12 4825415478 3131 Doctor Drive. LA,
                    California Complaints/Enquiries: pack&go@mail.com
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="w-3/12">
              <ul className=" flex flex-col justify-center gap-y-[30px] text-[16px] font-normal leading-[30px] text-font_paragraph text-left font-poppins ">
                <p className=" text-font_primary text-[25px] pt-[50px] pb-[20px] font-semibold leading-[30px] font-poppins tracking-[0.2px]">
                  Tour
                </p>
                <Li liText={"Thailand"} />
                <Li liText={"Vietnam"} />
                <Li liText={"Korea"} />
                <Li liText={"Mexico"} />
                <Li liText={"Italy"} />
              </ul>
            </div>
            <div className="w-3/12">
              <ul className=" flex flex-col justify-center gap-y-[30px] text-[16px] font-normal leading-[30px] text-font_paragraph text-left font-poppins ">
                <p className=" text-font_primary text-[25px] pt-[50px] pb-[20px] font-semibold leading-[30px] font-poppins tracking-[0.2px]">
                Support
                </p>
                <Li liText={"Account"} />
                <Li liText={"Legal"} />
                <Li liText={"Contact"} />
                <Li liText={"Affiliate Program"} />
                <Li liText={"Privacy Policy"} />
              </ul>
            </div>
            <div className="w-3/12">
              <ul className=" flex flex-col justify-center gap-y-[30px] text-[16px] font-normal leading-[30px] text-font_paragraph text-left font-poppins ">
                <p className=" text-font_primary text-[25px] pt-[50px] pb-[20px] font-semibold leading-[30px] font-poppins tracking-[0.2px]">
                Useful Pages
                </p>
                <Li liText={"Deals"} />
                <Li liText={"FAQs"} />
                <Li liText={"Why Choose Us"} />
                <Li liText={"Subscribe"} />
                
              </ul> 
            </div>
          </Flex>
        </Contain>
      </section>
    </div>
  );
};

export default Footer;
