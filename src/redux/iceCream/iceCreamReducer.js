import { BUY_ICECREAM } from "./iceCreamActionTypes";

export default (state = { iceCream: 10 }, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, iceCream: state.iceCream - 1 };

    default:
      return state;
  }
};
