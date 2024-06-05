import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import PopularCamps from "../PopularCamps/PopularCamps";

const Home = () => {
  useEffect(() => {
    document.title = "Medicamp | Home";
  }, []);
  return (
    <div>
      <Banner />
      <PopularCamps />
    </div>
  );
};

export default Home;
