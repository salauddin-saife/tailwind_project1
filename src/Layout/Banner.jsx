import React from "react";
import Contain from "../components/Contain";
import Button from "../components/Button";
import InputCard from "../components/InputCard";


const Banner = () => {
  return (
    <div>
      <section className="bg-[#F8F8F8]">
        <Contain className="h-[886px]">
          <div className="w-1/2">
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
            
            <div className=" bg-amber-500 h-[130px] w-[825px] rounded-xl border-web_green border-2  ">
              <input
                type="text"
                className=" px-6 py-5 h-[82px] w-[773px] bg-white rounded-xl "
              />
              <InputCard/>
              

              
              <Button/>
            </div>
          </div>
          <div className="w-1/2"></div>
        </Contain>
      </section>
    </div>
  );
};

export default Banner;
