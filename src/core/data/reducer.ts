import { IProduct } from "interfaces/IProduct";
import {
  TDataActions,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  SET_USER,
  SET_SIDE_BAR,
} from "./actions";

interface IData {
  user: firebase.User | null;
  baskets: IProduct[];
  isSideMenuOpen: boolean;
}

const initState = {
  user: null,
  baskets: [],
  isSideMenuOpen: false,
};

const reducer = (state: IData = initState, action: TDataActions): IData => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        baskets: [...state.baskets, action.payload],
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        baskets: [
          ...state.baskets.filter((item) => item.id !== action.payload),
        ],
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
    default:
      return state;
  }
};

export default reducer;
