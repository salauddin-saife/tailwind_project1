import React from "react";
import Contain from "../components/Contain";
import Image from "../components/Image";
import Event_back from "../assets/Event_back.jpg";
import Event_front from "../assets/Event_front.png";
import Dots from "../assets/Dots.png";
import { FaCheck } from "react-icons/fa";

const Events = () => {
  return (
    <div className="mt-[150px]">
      <Contain>
        <div className="flex">
          <div className="w-6/12 flex relative">
            <div className="w-[371px] h-[384px] z-20 hover:scale-[105%] duration-300 ">
              <Image className={"rounded-xl"} src={Event_back} />
            </div>
            <div className="absolute top-[320px] left-[90px] z-10">
              <Image src={Dots} />
            </div>
            <div className="absolute left-[200px] top-[190px] z-30 hover:scale-[105%] duration-300">
              <Image className={"rounded-xl"} src={Event_front} />
            </div>
          </div>
          <div className="w-6/12">
            <div className="pl-[35px]">
              <div className="w-[489px] pt-[100px] text-font.primary text-[40px] font-semibold tracking-[0.2px] font-poppins">
                <h1>Always give you promo 
                on every Month / Event</h1>
              </div>
              <div className="w-[431px] text-font_paragraph text-[16px] pt-[20px] font-normal leading-[30px] font-poppins">
                <p>
                We make sure give you a lot of promo every month or event based on calendar. If you want, just Subscribe on Newsletter.
                </p>
              </div>
              <div className="flex gap-[20px] pt-[30px]">
                {/* <==========================1st part======================> */}
                <div className="">
                  <div className="">
                    <div className="flex pt-[20px] justify-start items-center align-middle gap-x-6  text-font_paragraph text-[16px] font-normal leading-[30px] font-poppins ">
                      <FaCheck className="text-web_green" />
                      <p className="">25% for New Members</p>
                    </div>
                    <div className="flex pt-[20px] justify-start items-center align-middle gap-x-6  text-font_paragraph text-[16px] font-normal leading-[30px] font-poppins ">
                      <FaCheck className="text-web_green" />
                      <p className="">Up 50% on your birthday</p>
                    </div>
                    <div className="flex pt-[20px] justify-start items-center align-middle gap-x-6  text-font_paragraph text-[16px] font-normal leading-[30px] font-poppins ">
                      <FaCheck className="text-web_green" />
                      <p className="">Cashback 10% via OVO</p>
                    </div>
                  </div>
                </div>
                {/* <================2nd part=======================> */}
                <div className="">
                  <div className="">
                    <div className="flex pt-[20px] justify-start items-center align-middle gap-x-6  text-font_paragraph text-[16px] font-normal leading-[30px] font-poppins ">
                      <FaCheck className="text-web_green" />
                      <p className="">Cancelled refund 100%</p>
                    </div>
                    <div className="flex pt-[20px] justify-start items-center align-middle gap-x-6  text-font_paragraph text-[16px] font-normal leading-[30px] font-poppins ">
                      <FaCheck className="text-web_green" />
                      <p className="">Reward for 1000% Points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Contain>
    </div>
  );
};

export default Events;
