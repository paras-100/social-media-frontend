import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { postListReducer } from "./reducers/postReducer";
import { loginUserReducer, createPostReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  postList: postListReducer,
  userData: loginUserReducer,
  createPost: createPostReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
