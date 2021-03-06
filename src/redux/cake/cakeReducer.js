import { BUY_CAKE } from "./cakeActionTypes";

export default (state = { cake: 10 }, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, cake: state.cake - action.payload };

    default:
      return state;
  }
};
