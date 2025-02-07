import React from "react";

const Six_section_Card = ({ Icon, text_h1, text_para }) => {
  return (
    <div className="pt-[80px]">
      <div className=" bg-white w-[370px] h-[341px] rounded-2xl shadow-[0px_0px_7px_-4px_rgba(0,0,0,0.75)] hover:shadow-[0px_0px_25px_-4px_rgba(0,0,0,0.75)] duration-300 pointer-events-auto">
        <div className="pl-[45px] pt-[80px] pointer-events-auto ">
          <div className="pl-[35px] pointer-events-auto">
            {/* <Icon className="text-web_green scale-[5] bg-web_green/10 hover:bg-web_green/20 p-[3px] rounded-[2px] bg-opacity-10 duration-300" 
        /> */}
            {Icon && (
              <Icon className="text-web_green scale-[5] bg-web_green/10 hover:bg-web_green/20 p-[3px] rounded-[2px] duration-300" />
            )}
          </div>
          <div className=" pt-[80px] pointer-events-auto">
            <div className="w-[260px] font-poppins font-medium text-[25px] leading-[24px] text-left text-font.primary tracking-[0.2px] align-top pointer-events-auto">
              <h1>{text_h1}</h1>
            </div>
            <div className="w-[263px] font-normal text-[16px] leading-[30px] align-top text-font_paragraph pt-[20px] pointer-events-auto">
              <p>{text_para}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Six_section_Card;
