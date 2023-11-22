import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_CREATE_POST_FAIL,
  USER_CREATE_POST_REQUEST,
  USER_CREATE_POST_SUCCESS,
} from "../constants/userConstants";

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, name: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createPostReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CREATE_POST_REQUEST:
      return { loading: true };
    case USER_CREATE_POST_SUCCESS:
      return { loading: false, createData: action.payload };
    case USER_CREATE_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
