import axios from "axios";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_CREATE_POST_FAIL,
  USER_CREATE_POST_REQUEST,
  USER_CREATE_POST_SUCCESS,
} from "../constants/userConstants";

export const loginUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const createPost = (data) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
