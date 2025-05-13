import React from "react";
import { assets, products } from "../assets/assets";
import Hero from "../components/Hero";
import Latestcollection from "../components/Latestcollection";
import Bestsellers from "../components/Bestsellers";
import Tags3 from "../components/Tags3";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Latestcollection/>
      <Bestsellers/>
      <Tags3/>
      <Newsletter/>
    </div>
  );
};

export default Home;
