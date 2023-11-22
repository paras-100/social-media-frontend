import axios from "axios";

import {
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
} from "../constants/postConstants";

export const listPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });

    const config = {
      headers: {
        "app-id": "655db6202aedff6e1e07a56b",
      },
    };

    const { data } = await axios.get("https://dummyapi.io/data/v1/post", {
      headers: {
        "app-id": "655db6202aedff6e1e07a56b",
      },
    });

    dispatch({ type: POST_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
