import { IProduct } from "interfaces/IProduct";

const Utils = {
  getEmailName: (user: firebase.User | null): string => {
    let name = "Guest";
    if (user && user.email) {
      name = user.email.split("@")[0];
    }

    return name;
  },

  getBasketTotal: (basket: IProduct[]): number => {
    return basket.reduce<number>((pre, curr) => pre + curr.price, 0);
  },
  formatDate: (date: number) => {
    const d = new Date(date * 1000);
    const yyyy = d.getFullYear();
    const mm = (d.getMonth() + 1).toString().padStart(2, "0");
    const dd = (d.getDate() + 1).toString().padStart(2, "0");

    return `${yyyy}-${mm}-${dd}`;
  },
  formatPrice: (price: number) => {
    function numberWithCommas(x: number) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    price = price / 100;

    return numberWithCommas(price);
  },
};

export { Utils };
