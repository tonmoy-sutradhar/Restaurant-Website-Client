import React from "react";
import Banner from "../Banner/Banner";
import CategorySwiper from "../CategorySwiper/CategorySwiper";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../FeaturedSection/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <CategorySwiper></CategorySwiper>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
