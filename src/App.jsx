import React from "react";
import Contain from "./components/Contain";
import Navbar from "./layout/Navbar";
import Banner from "./layout/Banner";
import InputCard from "./components/InputCard";
import Flex from "./components/Flex";
import TravelPart from "./layout/TravelPart";
import Six_section_Card from "./components/Six_section_Card" ;
import Six_Card from "./layout/Six_Card";
import Popular_Destination from "./layout/Popular_Destination";
import Book_Now_Layout from "./layout/Book_Now_Layout";
import Number_Layout from "./layout/Number_Layout";
import Destination_part from "./layout/Destination_part";
import Events from "./layout/Events";
import Money_Back from "./layout/Money_Back";
import Explore from "./layout/Explore";
import Three_card from "./layout/Three_card";
import Testimonial from "./layout/Testimonial";
import Subscribe from "./layout/Subscribe";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <section className="max-w-[1920px]">
      <div className="">
        <Navbar />
        <Banner />
        <TravelPart />
        <Six_Card />
        <Popular_Destination />
        <Book_Now_Layout />
        <Number_Layout/>
        <Destination_part/>
        <Events/>
        <Money_Back/>
        <Explore/>
        <Three_card/>
        <Testimonial/>
        <Subscribe/>
        <Footer/>
      </div>
    </section>
  );
};

export default App;
