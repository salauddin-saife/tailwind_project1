import React from "react";
import Book_Now_Card from "../components/Book_Now_Card";
import Paris from "../assets/Paris.png";
import Venice from "../assets/Venice.png";
import Santorini from "../assets/Santorini.png";
import { CiLocationOn } from "react-icons/ci";
import Contain from "../components/Contain";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Slide_dots from "../assets/Slide_dots.png";

const Three_card = () => {
  return (
    <div>
      <Contain className={"pb-[60px]"}>
        <Flex className={"gap-x-6 pt-[120px]"}>
          <div>
            <Book_Now_Card
              img_src={Venice}
              Book_now_h1={"Venice, Italy"}
              Book_now_p={
                "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam"
              }
              Book_now_btn_text={"⌘ Italy"}
            />
          </div>
          <div>
            <Book_Now_Card
              img_src={Paris}
              Book_now_h1={"Paris, France"}
              Book_now_p={
                "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam"
              }
              Book_now_btn_text={"⌘ France"}
            />
          </div>
          <div>
            <Book_Now_Card
              img_src={Santorini}
              Book_now_h1={"Santorini, Greece"}
              Book_now_p={
                "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam"
              }
              Book_now_btn_text={"⌘ Greece"}
            />
          </div>
        </Flex>
        <div className="pt-[60px] flex justify-center text-center items-center">
            <Image src={Slide_dots}/>
        </div>
      </Contain>
    </div>
  );
};

export default Three_card;
