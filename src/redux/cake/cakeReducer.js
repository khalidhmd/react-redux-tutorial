import { BUY_CAKE } from "./cakeActionTypes";

export const cakeReducer = (state = { cake: 10 }, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, cake: state.cake - 1 };

    default:
      return state;
  }
};
