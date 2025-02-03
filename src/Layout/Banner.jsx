import React from "react";
import Contain from "../components/Contain";

const Banner = () => {
  return (
    <div>
      <section className="bg-[#F8F8F8]">
        <Contain className="h-[886px]">
            <div className=" ">
              <h1 className="font-poppins text-[65px] w-[573px] font-semibold">Start Exploring to Find Inner Peace
              by Traveling</h1>
            </div>
            <div>
              <p>Lost yourself with Vacation and Travel into the place that you never visit before. We have thousand places in our database for you.</p>
            </div>
            <div>
              <input type="text" />
            </div>
        </Contain>
      </section>
    </div>
  );
};

export default Banner;
