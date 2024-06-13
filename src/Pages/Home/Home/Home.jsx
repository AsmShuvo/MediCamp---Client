import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import PopularCamps from "../PopularCamps/PopularCamps";
import Reviews from "../../Reviews/Reviews";
import HomeReviews from "../../Reviews/HomeReviews";

const Home = () => {
  useEffect(() => {
    document.title = "Medicamp | Home";
  }, []);
  return (
    <div>
      <Banner />
      <PopularCamps />
      <HomeReviews />
    </div>
  );
};

export default Home;
