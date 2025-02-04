import React from "react";
import Contain from "../components/Contain";
import Button from "../components/Button";
import InputCard from "../components/InputCard";
import Flex from "../components/Flex";
import { FaSearch } from "react-icons/fa";
import Image from "../components/Image";
import Banner_front from "../assets/banner_front.png";
import Banner_back from "../assets/banner_back.png";

const Banner = () => {
  return (
    <div>
      <section className="bg-[#F8F8F8] z-30 relative ">
        <div className="z-10">
          <div className="absolute top-[483px] left-[378px]">
            <Image className={"w-[80%]"} src={Banner_back} />
          </div>
          <div className="absolute top-[389px] left-[656px]">
            <Image className={"w-[80%]"} src={Banner_front} />
          </div>
        </div>
        <Contain className="h-[886px] flex z-30">
          <div className="w-6/12 z-30">
            <div className=" ">
              <h1 className="font-poppins text-[65px] w-[573px] font-semibold text-[#1E1E1E] leading-[80px] tracking-[0.2px] text-left pt-[135px]">
                Start Exploring to Find Inner Peace by Traveling
              </h1>
            </div>
            <div>
              <p className="w-[597px] font-poppins font-normal text-font_paragraph leading-[30px] text-[16px] text-left pt-[39px] opacity-[70%] ">
                Lost yourself with Vacation and Travel into the place that you
                never visit before. We have thousand places in our database for
                you.
              </p>
            </div>
            <div className="py-[70px] items-start text-left pointer-events-auto">
              <Button text={"Discover Now"} />
            </div>

            {/* Search section starts====================
            =========================== */}

            <div className="w-[825px] relative bg-white  rounded-xl border-web_green border-2 pointer-events-auto z-40 top-[20px]">
              <Flex className={"py-[23px] px-[30] gap-x-20 relative z-40 items-center justify-center"}>
                <InputCard input_text={"Locations"} />
                <InputCard input_text={"Dates"} />
                <InputCard input_text={"People"} />
                <div>
                  <button className="decoration-0 bg-web_green px-6 py-5 rounded-xl border-2 border-web_green text-white font-semibold  font-poppins hover:bg-transparent hover:text-web_green duration-300 pointer-events-auto text-[22px] relative z-40">
                    <FaSearch />
                  </button>
                </div>
              </Flex>
            </div>
          </div>

          {/* <div className="w-6/12 z-10 w-full">
            <div className="relative">
              
            </div>
          </div> */}
        </Contain>
      </section>
    </div>
  );
};

export default Banner;
