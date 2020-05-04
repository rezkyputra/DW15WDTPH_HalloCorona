import { createStore, combineReducers, applyMiddleware } from "redux";
import article from "../_reducers/article";
import user from "../_reducers/user";
import { logger, promise } from "../middleware";

const middleware = [logger, promise];

const rootReducer = combineReducers({
  article,
  user,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
