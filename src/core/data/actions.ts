import { IProduct } from "interfaces/IProduct";

export const ADD_TO_BASKET = "ADD_TO_BASKET" as const;
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET" as const;

export const addToBasket = (item: IProduct) => ({
  type: ADD_TO_BASKET,
  payload: item,
});
export const removeFromBasket = (id: string) => ({
  type: REMOVE_FROM_BASKET,
  payload: id,
});

export type TDataActions =
  | ReturnType<typeof addToBasket>
  | ReturnType<typeof removeFromBasket>;
