import React from "react";
import Banner from "../Banner/Banner";
import CategorySwiper from "../CategorySwiper/CategorySwiper";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../FeaturedSection/Featured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategorySwiper></CategorySwiper>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
