import { createStore, combineReducers, applyMiddleware } from "redux";
import UserReducer from "./Reducers/ProfilReducer";
import UserNameReducer from "./Reducers/UserNameReducer";
import AuthReducer from "./Reducers/AuthReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  UserReducer,
  UserNameReducer,
  AuthReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
