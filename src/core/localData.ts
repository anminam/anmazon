import { IProduct } from "interfaces/IProduct";

export const getLocalDataList = (): IProduct[] => {
  return [
    {
      id: "1",
      title: "Anminam In The House",
      price: 10,
      rating: 5,
      img: "/images/anminam-book-01.png",
    },
    {
      id: "2",
      title: "DualShock 4 Wireless Controller for PlayStation 4 - Magma Red",
      price: 10,
      rating: 5,
      img:
        "https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg",
    },
  ];
};
