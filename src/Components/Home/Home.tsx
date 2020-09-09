import React from "react";
import "./Home.scss";
import ProductSmallCard from "Components/ProductSmallCard/ProductSmallCard";
import { getLocalDataList } from "core/localData";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
          alt="we ship over 45 million products around the world"
        />
        <div className="home__row">
          <ProductSmallCard {...getLocalDataList()[0]} />
          <ProductSmallCard {...getLocalDataList()[1]} />
        </div>
        <div className="home__row">
          <ProductSmallCard {...getLocalDataList()[0]} />
          <ProductSmallCard {...getLocalDataList()[0]} />
          <ProductSmallCard {...getLocalDataList()[0]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
