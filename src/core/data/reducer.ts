import { IProduct } from "interfaces/IProduct";
import { TDataActions, ADD_TO_BASKET } from "./actions";

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
    default:
      return state;
  }
};

export default reducer;
