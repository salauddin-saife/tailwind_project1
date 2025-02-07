import React from "react";
import Book_Now_Card from "../components/Book_Now_Card";
import Flex from "../components/Flex";
import Paris from "../assets/Paris.png";
import Venice from "../assets/Venice.png";
import Santorini from "../assets/Santorini.png";

const Book_Now_Layout = () => {
  return (
    <section className="max-w-[1920px] flex justify-around items-center align-middle gap-x-6 pt-[100px]">
      <div className=" w-full flex justify-around items-center align-middle gap-x-6">
        <div className="flex justify-around items-center align-middle gap-x-6">
          <Flex
            className={"flex justify-around items-center align-middle gap-x-6"}
          >
            <div
              className=" 
          flex justify-around items-center align-middle gap-x-6"
            >
              <Book_Now_Card
                img_src={Paris}
                Book_now_h1={"Paris, France"}
                Book_now_h2={"$150"}
                Book_now_h3={" / Person"}
                Book_now_p={
                  "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam"
                }
                Book_now_btn_text={"Book Now"}
              />
              <Book_Now_Card
                img_src={Venice}
                Book_now_h1={"Paris, France"}
                Book_now_h2={"$150"}
                Book_now_h3={" / Person"}
                Book_now_p={
                  "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam"
                }
                Book_now_btn_text={"Book Now"}
              />
              <Book_Now_Card
                img_src={Santorini}
                Book_now_h1={"Paris, France"}
                Book_now_h2={"$150"}
                Book_now_h3={" / Person"}
                Book_now_p={
                  "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam"
                }
                Book_now_btn_text={"Book Now"}
              />
            </div>
          </Flex>
        </div>
      </div>
    </section>
  );
};

export default Book_Now_Layout;
