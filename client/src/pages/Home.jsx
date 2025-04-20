import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import BottamBanner from "../components/BottamBanner";
import NewsLatter from "../components/NewsLatter";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BestSeller />
      <BottamBanner />
      <NewsLatter />
    </div>
  );
};

export default Home;
