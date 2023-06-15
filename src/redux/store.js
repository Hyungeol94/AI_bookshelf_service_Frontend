import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducers";
import logger from "redux-logger";

const middleware = process.env.REACT_APP_CLIENT_URL?.includes("localhost")
  ? composeWithDevTools(applyMiddleware(ReduxThunk, logger))
  : applyMiddleware(ReduxThunk);
const store = createStore(rootReducer, middleware);

export default store;
