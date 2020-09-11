import { IProduct } from "interfaces/IProduct";
import {
  TDataActions,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  SET_USER,
  SET_SIDE_BAR,
  ADD_BASKET_LIST,
  EMPTY_BASKET,
} from "./actions";

interface IData {
  user: firebase.User | null;
  basket: IProduct[];
  isSideMenuOpen: boolean;
}

const initState = {
  user: null,
  basket: [],
  isSideMenuOpen: false,
};

const reducer = (state: IData = initState, action: TDataActions): IData => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case ADD_BASKET_LIST:
      return {
        ...state,
        basket: action.payload,
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: [...state.basket.filter((item) => item.id !== action.payload)],
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_SIDE_BAR:
      return {
        ...state,
        isSideMenuOpen: action.payload,
      };
    case EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
