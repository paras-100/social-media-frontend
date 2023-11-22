import {
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
} from "../constants/postConstants";

export const postListReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true };
    case POST_LIST_SUCCESS:
      return { loading: false, postData: action.payload };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
