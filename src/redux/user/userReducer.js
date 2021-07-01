import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userActions";

const userReducer = (
  state = { loading: false, users: [], err: "" },
  action
) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload, err: "" };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, users: [], err: action.payload };
    default:
      return state;
  }
};

export default userReducer;
