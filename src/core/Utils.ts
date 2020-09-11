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
};

export { Utils };
