import React from "react";
import Contain from "../components/Contain";
import Button from "../components/Button";

const Explore = () => {
  return (
    <div>
      <Contain>
        <div>
          <div className=" W-[481px] pt-[100px] text-left text-font.primary text-[40px] font-semibold tracking-[0.2px] font-poppins">
            <h1>Explore Top Destination</h1>
          </div>
          <div className=" text-font_paragraph text-[16px] text-left pt-[20px] font-normal leading-[30px] font-poppins w-[481px]">
            <p>
              We are self-service data analytics software that lets you create
              visually appealing data visualizations and insightful dashboards
              in minutes.
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-x-[40px] pt-[50px] pb-[50px]">
            <div>
            <Button text={"Popular Destination"} className={"text-[10px]"}/>
            </div>
            <div>
            <Button text={"Destination For Art & Culture"} className={"text-[10px]"}/>
            </div>
            <div>
            <Button text={"Destination For Outdoor Adventer"} className={"text-[10px]"}/>
            </div>
            <div>
            <Button text={"Mountain"} className={"text-[10px]"}/>
            </div>
            
            
        </div>
      </Contain>
    </div>
  );
};

export default Explore;
