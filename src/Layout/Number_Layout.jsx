import React from "react";
import Number_Box from "../components/Number_Box";
import Contain from "../components/Contain";
import { BiSolidHandRight } from "react-icons/bi";
import Button from "../components/Button";

const Number_Layout = () => {
  return (
    <>
      <section className="bg-[#1E1E1E]/5 mt-[90px]">
        <Contain className={""}>
          <div className="align-top text-left flex">
            <div className="w-6/12">
              <div className="w-[418px] pt-[100px] text-font.primary text-[40px] font-semibold tracking-[0.2px] font-poppins">
                <h1>Go Travel, Discover Remember Us</h1>
              </div>
              <div className="">
                <div className="w-[516px] text-font_paragraph text-[16px] pt-[20px] font-normal leading-[30px] font-poppins">
                  <p>
                    We are self-service data analytics software that lets you
                    create visually appealing data visualizations and insightful
                    dashboards in minutes.
                  </p>
                </div>
                <div className="flex pt-[20px] justify-start items-center align-middle gap-x-6  text-font_paragraph text-[16px] font-normal leading-[30px] font-poppins ">
                  <BiSolidHandRight className="text-web_green" />
                  <p className="w-[338px]">
                    We are self-service data software visually appealing data
                    visualizations.
                  </p>
                </div>
                <div className="flex pt-[10px] justify-start items-center align-middle gap-x-6  text-font_paragraph text-[16px] font-normal leading-[30px] font-poppins ">
                  <BiSolidHandRight className="text-web_green" />
                  <p className="w-[338px]">
                    We are self-service data software visually appealing data
                    visualizations.
                  </p>
                </div>
                <div className="flex  pt-[10px] justify-start items-center align-middle gap-x-6  text-font_paragraph text-[16px] font-normal leading-[30px] font-poppins ">
                  <BiSolidHandRight className="text-web_green" />
                  <p className="w-[338px]">
                    We are self-service data software visually appealing data
                    visualizations.
                  </p>
                </div>
              </div>
              <div className="pt-[50px]">
                <Button text={"Discover Place"} />
              </div>
            </div>
            <div className="w-6/12">
              <div className="flex gap-x-8 pt-[60px]">
                <div>
                  <Number_Box />
                </div>
                <div>
                  <Number_Box />
                </div>
              </div>
              <div className="flex gap-x-8 pt-[30px] pb-[60px] ">
                <div>
                  <Number_Box />
                </div>
                <div>
                  <Number_Box />
                </div>
              </div>
            </div>
          </div>
        </Contain>
      </section>
    </>
  );
};

export default Number_Layout;
