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
          src="/images/adman.png"
          alt="It takes more than 45 million days to ship products worldwide."
        />
        <div className="home__row">
          <ProductSmallCard {...getLocalDataList()[0]} />
          <ProductSmallCard {...getLocalDataList()[1]} />
        </div>
        <div className="home__row">
          <ProductSmallCard {...getLocalDataList()[2]} />
          <ProductSmallCard {...getLocalDataList()[3]} />
          <ProductSmallCard {...getLocalDataList()[4]} />
        </div>
        <div className="home__row">
          <ProductSmallCard {...getLocalDataList()[5]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
