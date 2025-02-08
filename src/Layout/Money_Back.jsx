import React from "react";
import Contain from "../components/Contain";
import { FaCircle } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import Dots from "../assets/Dots.png";
import Image from "../components/Image";
import Money_back_back from "../assets/Money_back_back.png";
import Money_back_front from "../assets/Money_back_front.png";

const Money_Back = () => {
  return (
    <div>
      <Contain>
        <div className="flex pb-[100px]">
          <div className="w-6/12 mt-[50px]">
            <div className=" pt-[100px] text-font.primary text-[40px] font-semibold tracking-[0.2px] font-poppins">
              <h1>100% Money back Guarantee If you Cancel</h1>
            </div>
            <div className=" text-font_paragraph text-[16px] pt-[20px] font-normal leading-[30px] font-poppins w-[516px]">
              <p>
                We Promises in this case. We still want to refund your money
                when you cancel order.
              </p>
            </div>
            <div className="pt-[50px]">
              <div className="bg-web_green/10 p-[20px] w-[490px] rounded-xl">
                <div className="flex justify-start items-start align-middle gap-x-6  text-font_primary text-[18px] font-medium leading-[20px] font-poppins tracking-[0.22px]">
                  <FaCircle className="text-web_green" />
                  <div className="">
                    <p className="">Friendly, Quick, Easy</p>
                  </div>
                  <FaChevronUp className="text-web_green" />
                </div>

                <div className=" w-[368px] text-font_paragraph text-[16px] pt-[20px] font-normal leading-[30px] font-poppins">
                  <p>
                    Business messaging that feels just like the messenger apps
                    you and your customers use every day.
                  </p>
                </div>
              </div>
              <div className="pt-[50px] pl-[20px]">
                <div className="flex justify-start items-start align-middle gap-x-6  text-font_primary text-[18px] font-medium leading-[20px] font-poppins tracking-[0.22px]">
                  <RiCheckboxBlankCircleLine className="text-web_green" />
                  <div className="">
                    <p className="">Fast Response Answer </p>
                  </div>
                  <FaChevronDown className="text-web_green" />
                </div>
                <div className="flex justify-start items-start align-middle gap-x-6  text-font_primary text-[18px] font-medium leading-[20px] font-poppins tracking-[0.22px] pt-[40px]">
                  <RiCheckboxBlankCircleLine className="text-web_green" />
                  <div className="">
                    <p className="">Money Back Guarantee</p>
                  </div>
                  <FaChevronDown className="text-web_green" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-6/12 ">
            <div className="relative top-[150px]">
              <div className="w-[371px] h-[384px] z-20 hover:scale-[105%] duration-300 ">
                <Image className={"rounded-xl"} src={Money_back_back} />
              </div>
              <div className="absolute top-[100px] left-[330px] z-10">
                <Image src={Dots} />
              </div>
              <div className="absolute left-[200px] top-[190px] z-30 hover:scale-[105%] duration-300">
                <Image className={"rounded-xl"} src={Money_back_front} />
              </div>
            </div>
            <div>
              <div className="relative flex  ">
                <div className=" text-font_paragraph text-[16px] p-[10px] font-normal leading-[28px] font-poppins w-[222px] absolute z-50 bg-white text-left rounded-xl top-[160px] left-[50px]
                shadow-[0px_0px_7px_-4px_rgba(0,0,0,0.75)] hover:shadow-[0px_0px_25px_-4px_rgba(0,0,0,0.75)] duration-300">
                  <p>Hi, Can you help me? 😔</p>
                </div>
                <div className=" text-font_paragraph text-[16px] p-[10px] font-normal leading-[28px] font-poppins w-[250px] absolute z-50 bg-white text-left rounded-xl top-[215px]  shadow-[0px_0px_7px_-4px_rgba(0,0,0,0.75)] hover:shadow-[0px_0px_25px_-4px_rgba(0,0,0,0.75)] duration-300">
                  <p>Can I get my money back?</p>
                </div>
                <div className=" text-font_paragraph text-[16px] p-[10px] font-normal leading-[28px] font-poppins w-[291px] absolute z-50 bg-white text-left rounded-xl top-[275px]  shadow-[0px_0px_7px_-4px_rgba(0,0,0,0.75)] hover:shadow-[0px_0px_25px_-4px_rgba(0,0,0,0.75)] duration-300">
                  <p>Thanks for your help!! 😍😍😍😍</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Contain>
    </div>
  );
};

export default Money_Back;
