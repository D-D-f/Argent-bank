import { createStore, combineReducers, applyMiddleware } from "redux";
import UserReducer from "./Reducers/ProfilReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
