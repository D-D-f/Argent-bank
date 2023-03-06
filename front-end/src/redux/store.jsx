import { createStore, combineReducers, applyMiddleware } from "redux";
import UserReducer from "./Reducers/ProfilReducer";
import TokenReducer from "./Reducers/TokenReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  TokenReducer,
  UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
