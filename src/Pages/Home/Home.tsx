import React, { useEffect, useState } from "react";
import ProductSmallCard from "Components/ProductSmallCard/ProductSmallCard";
import { getLocalDataList } from "core/localData";
import { RootState } from "core/Store";
import { useSelector } from "react-redux";
import { IProduct } from "interfaces/IProduct";

const productList = getLocalDataList();

const Home = () => {
  const searchKeyword = useSelector(
    (state: RootState) => state.data.searchKeyword
  );
  const [findedList, setFindedList] = useState<IProduct[]>([]);

  useEffect(() => {
    if (productList.length > 0) {
      setFindedList(
        productList.filter((item) =>
          item.title.toLowerCase().includes(searchKeyword)
        )
      );
    }
  }, [searchKeyword]);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="/images/adman.png"
          alt="It takes more than 45 million days to ship products worldwide."
        />
        {searchKeyword &&
          findedList.map((item) => (
            <div className="home__row">
              <ProductSmallCard {...item} />
            </div>
          ))}
        {!searchKeyword && (
          <>
            <div className="home__row">
              <ProductSmallCard {...productList[0]} />
              <ProductSmallCard {...productList[1]} />
            </div>
            <div className="home__row">
              <ProductSmallCard {...productList[2]} />
              <ProductSmallCard {...productList[3]} />
              <ProductSmallCard {...productList[4]} />
            </div>
            <div className="home__row">
              <ProductSmallCard {...productList[5]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
