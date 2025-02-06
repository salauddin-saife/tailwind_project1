import React from "react";
import Contain from "./components/Contain";
import Navbar from "./layout/Navbar";
import Banner from "./layout/Banner";
import InputCard from "./components/InputCard";
import Flex from "./components/Flex";
import TravelPart from "./layout/TravelPart";
import Six_section_Card from "./components/Six_section_Card";
import Six_Card from "./layout/Six_Card";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <TravelPart />
      <Six_Card/>
    </div>
  );
};

export default App;
