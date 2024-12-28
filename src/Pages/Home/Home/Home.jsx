import React from "react";
import Banner from "../Banner/Banner";
import CategorySwiper from "../CategorySwiper/CategorySwiper";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategorySwiper></CategorySwiper>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
