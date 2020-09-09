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
      price: 64.99,
      rating: 4,
      img:
        "https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg",
    },
    {
      id: "3",
      title:
        "New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray",
      price: 2099.0,
      rating: 4,
      img:
        "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: "4",
      title: "Apple AirPods with Charging Case (Wired)",
      price: 118.68,
      rating: 4,
      img:
        "https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      id: "5",
      title:
        "HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black",
      price: 109.99,
      rating: 4,
      img:
        "https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US320_FMwebp_QL65_.jpg",
    },
  ];
};
