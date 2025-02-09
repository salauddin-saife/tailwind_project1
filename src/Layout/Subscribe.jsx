import React from "react";
import Contain from "../components/Contain";
import Bg_img from "../assets/Bg_img.png";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <div
      className="min-h-[652px] max-w-[1920px] h-full bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Bg_img})` }}
    >
      <section className=" ">
        <div>
          <Contain>
            <div className="pt-[100px]">
              <div className=" h-[352px] flex-row justify-center text-center">
                <div className="flex justify-center text-center w-[659px] m-auto pt-[50px]">
                  <h1 className="text-[40px] font-semibold font-poppins text-white text-center">
                    Subscribe To Get The Latest News About Us
                  </h1>
                </div>
                <div className="flex justify-center text-center pt-[30px] w-[565px] m-auto">
                  <p className="text-[16px] font-normal leading-[30px] text-white w-[682px] text-center font-poppins ">
                    We Recommended you to subscribe to our newspaperm, enter
                    your email below to get daily update about us.
                  </p>
                </div>
                <div className="pt-[50px]">
                  <div className="w-[770px] h-[100px] bg-white flex justify-between m-auto rounded-xl">
                    <div className="text-[16px] pl-[20px] font-normal leading-[30px] text-[#9D9D9D]  font-poppins justify-start flex align-middle items-center ">
                      <p>Enter your email address</p>
                    </div>

                    <div className="flex justify-end align-middle items-center rounded-xl mr-[15px]">
                      <Button
                        text={"Subscribe"}
                        className={" pt-[22px] pb-[22px]"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Contain>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
