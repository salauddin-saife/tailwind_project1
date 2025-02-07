import React from "react";
import Book_Now_Card from "../components/Book_Now_Card";
import Flex from "../components/Flex";

const Book_Now_Layout = () => {
  return (
    <section className="max-w-[1920px] flex justify-around items-center align-middle gap-x-6 pt-[100px]">

<div className=" w-full flex justify-around items-center align-middle gap-x-6">
      <div className="flex justify-around items-center align-middle gap-x-6">
        <Flex className={"flex justify-around items-center align-middle gap-x-6"}>
          <div className=" 
          flex justify-around items-center align-middle gap-x-6">
            <Book_Now_Card />
            <Book_Now_Card />
            <Book_Now_Card />
            <Book_Now_Card />
            <Book_Now_Card />
          </div>
        </Flex>
      </div>
    </div>
    </section>
   
  );
};

export default Book_Now_Layout;


