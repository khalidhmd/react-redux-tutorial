import { BUY_ICECREAM } from "./iceCreamActionTypes";

export const iceCreamReducer = (state = { iceCream: 10 }, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, iceCream: state.iceCream - 1 };

    default:
      return state;
  }
};
