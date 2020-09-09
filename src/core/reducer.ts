import { Dispatch } from "react";

export interface IData {
  basket: string[];
}

export const initState = {
  basket: [],
};

const addBasket = () => ({ type: "ADD_TO_BASKET", basket: [] });
export type Actions = ReturnType<typeof addBasket>;

export type StateDispatch = Dispatch<Actions>;

export const reducer = (state: IData, action: Actions): IData => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...action.basket],
      };
    default:
      return state;
  }
};
