import { IProduct } from "interfaces/IProduct";
import { TDataActions, ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actions";

const initState = {
  baskets: [],
};

interface IData {
  baskets: IProduct[];
}

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
    default:
      return state;
  }
};

export default reducer;
