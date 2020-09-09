import { IProduct } from "interfaces/IProduct";

export const ADD_TO_BASKET = "ADD_TO_BASKET" as const;

export const addToBasket = (item: IProduct) => ({
  type: ADD_TO_BASKET,
  payload: item,
});

export type TDataActions = ReturnType<typeof addToBasket>;
