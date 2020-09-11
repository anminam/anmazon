import { IProduct } from "interfaces/IProduct";

export const SET_USER = "SET_USER" as const;

export const setUser = (user: firebase.User | null) => ({
  type: SET_USER,
  payload: user,
});

export const SET_SIDE_BAR = "SET_SIDE_BAR" as const;

export const setSideBar = (isOpen: boolean) => ({
  type: SET_SIDE_BAR,
  payload: isOpen,
});

export const ADD_TO_BASKET = "ADD_TO_BASKET" as const;
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET" as const;
export const ADD_BASKET_LIST = "ADD_BASKET_LIST" as const;

export const addToBasket = (item: IProduct) => ({
  type: ADD_TO_BASKET,
  payload: item,
});
export const removeFromBasket = (id: string) => ({
  type: REMOVE_FROM_BASKET,
  payload: id,
});
export const addBasketList = (list: IProduct[]) => ({
  type: ADD_BASKET_LIST,
  payload: list,
});

export type TDataActions =
  | ReturnType<typeof setUser>
  | ReturnType<typeof setSideBar>
  | ReturnType<typeof addToBasket>
  | ReturnType<typeof addBasketList>
  | ReturnType<typeof removeFromBasket>;
