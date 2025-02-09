import React from "react";
import Contain from "../components/Contain";
import Image from "../components/Image";
import Face1 from "../assets/Face1.png";
import Face2 from "../assets/Face2.png";
import Face3 from "../assets/Face3.png";
import Face4 from "../assets/Face4.png";
import Face5 from "../assets/Face5.png";
import { FaQuoteRight } from "react-icons/fa";
import Slide_dots from "../assets/Slide_dots.png";

const Testimonial = () => {
  return (
    <div>
      <Contain>
        <div className="flex pb-[200px]">
          <div className="w-6/12 relative">
            <div className="w-[114px] h=[114px] top-[50px] left-[310px] absolute">
              <Image src={Face1} />
            </div>
            <div className="w-[80px] h=[80px] absolute top-[250px] left-[250px]">
              <Image src={Face2} />
            </div>
            <div className="w-[80px] h=[80px] absolute left-[400px] top-[350px]">
              <Image src={Face3} />
            </div>
            <div className="w-[107px] h=[107px] left-[200px] top-[415px] absolute">
              <Image src={Face4} />
            </div>
            <div className="w-[123px] h=[123px] absolute top-[225px]">
              <Image src={Face5} />
            </div>
          </div>
          <div className="w-6/12">
            <div>
              <div className="w-[507px] pt-[100px] text-font.primary text-[40px] font-semibold tracking-[0.2px] font-poppins">
                <h1>Testimonial</h1>
              </div>
              <div className="text-web_green text-[50px] pt-[10px]">
              <FaQuoteRight />
              </div>
              <div className="w-[516px] text-font_paragraph text-[16px] pt-[20px] font-normal leading-[30px] font-poppins">
                <p>
                Since 2014, we’ve helped more than 500,000 people  of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation
                </p>
              </div>
              <div className="w-[209px] text-font_primary text-[20px] pt-[20px] font-semibold leading-[30px] font-poppins">
                <p>Farah smith - Visitor</p>
              </div>
              <div className="pt-[20px]">
                <Image src={Slide_dots}/>
              </div>
            </div>
          </div>
        </div>
      </Contain>
    </div>
  );
};

export default Testimonial;
