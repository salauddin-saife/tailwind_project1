import React from "react";
import Contain from "../components/Contain";
import Button from "../components/Button";
import Image from "../components/Image";
import Destination_img1 from "../assets/Destination_img1.png";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Dots from "../assets/dots.png";

const Destination_part = () => {
  return (
    <div>
      <section>
        <Contain>
          <div className="align-top text-left flex">
            <div className="w-6/12">
              <div className="w-[507px] pt-[100px] text-font.primary text-[40px] font-semibold tracking-[0.2px] font-poppins">
                <h1>We have more than 1000 selected Destination</h1>
              </div>
              <div className="w-[516px] text-font_paragraph text-[16px] pt-[20px] font-normal leading-[30px] font-poppins">
                <p>
                  You can choose one of many option that we have on our website.
                  Every destination have been 4+ star rated by our user before.
                  You can search by clicking our button on below of the this
                  text man.
                </p>
              </div>
              <div className="pt-[60px]">
                <Button text={"Discover Place"} />
              </div>
            </div>
            <div className="w-6/12">
              <div className="flex relative">
                <div className="scale-[100%] text-left align-top items-start pt-[50px] flex justify-start hover:scale-[105%] duration-300 z-20">
                  <Image src={Destination_img1} />
                </div>
                <div className="z-10 absolute left-[330px] top-[150px]">
                  <Image src={Dots} />
                </div>
              </div>

              <div className="w-[350px] h-[178px] pt-[60px] pl-[15px]">
                <div className="h-[52px] bg-[#F9EBEB] rounded-md text-center items-center flex justify-around  font-poppins font-normal text-[16px] leading-[28px] text-font_paragraph hover:scale-[110%] duration-300 ">
                  <p>Recommended Destination</p>
                  <div className="text-web_green">
                    <FaSearch />
                  </div>
                </div>
                <div className="h-[52px] bg-[#FFD3D3] rounded-md text-center items-center flex justify-around font-poppins font-normal text-[16px] leading-[28px] text-font_paragraph hover:scale-[110%] duration-300 ">
                  <p>Venice, Italy</p>
                  <div className="text-web_green text-right">
                    <FaCheck />
                  </div>
                </div>
                <div className="h-[52px] bg-[#0984E3]/20 rounded-md text-center items-center flex justify-around font-poppins font-normal text-[16px] leading-[28px] text-font_paragraph hover:scale-[110%] duration-300 ">
                  <p>Berlin, Germany</p>
                  <div className="text-web_green text-right">
                    <FaCheck />
                  </div>
                </div>
                <div className="h-[52px] bg-[#F9EBEB] rounded-md text-center items-center flex justify-around font-poppins font-normal text-[16px] leading-[28px] text-font_paragraph hover:scale-[110%] duration-300 ">
                  <p>Andalucia, Spain</p>
                  <div className="text-web_green text-right">
                    <FaCheck />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Contain>
      </section>
    </div>
  );
};

export default Destination_part;
