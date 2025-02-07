import React from "react";
import Image from "./Image";
import { FaStar } from "react-icons/fa6";
import Button from "./Button";
import { FaStarHalfAlt } from "react-icons/fa";

const Book_Now_Card = ({img_src,Book_now_h1, Book_now_h2,Book_now_p, Book_now_btn_text,Book_now_h3}) => {
  return (
    <div className="">
      <div className="w-[370px] h-[592px] bg-white rounded-2xl shadow-[0px_0px_7px_-4px_rgba(0,0,0,0.75)] hover:shadow-[0px_0px_25px_-4px_rgba(0,0,0,0.75)] duration-300 pointer-events-auto">
        <div className="pt-[15px]">
          <Image className={"rounded-2xl scale-[85%] hover:scale-[90%] duration-700"} src={img_src} />
        </div>
        <div className="flex gap-x-3 text-[#FF8B00] pl-[30px] pt-[20px]">
          <FaStar />
          <FaStarHalfAlt />
          <FaStarHalfAlt />
          <FaStarHalfAlt />
        </div>
        <div className="pl-[30px] font-poppins flex-row gap-y-6 pt-[10px]">
          <div className="text-[25px] font-medium leading-[ 24px] tracking-[0.2px] text-left align-top text-font_primary gap-6 ">
            <h1>{Book_now_h1}</h1>
          </div>
          <div className="w-[325px] font-normal text-[16px] leading-[30px] tracking-[] align-top text-font_paragraph pt-[10px]">
            <p>
            {Book_now_p}
            </p>
          </div>
          <div className="pt-[20px] flex align-top text-left ">
            <h2 className="font-semibold text-[20px] leading-[24px] tracking-[0.2px]">{Book_now_h2}</h2>
            <h3>{Book_now_h3}</h3>
          </div>
          <div className="pt-[50px]">
            <Button text={Book_now_btn_text}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book_Now_Card;
