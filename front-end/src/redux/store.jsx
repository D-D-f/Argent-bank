import { createStore, combineReducers, applyMiddleware } from "redux";
import UserReducer from "./Reducers/ProfilReducer";
import UserNameReducer from "./Reducers/UserNameReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  UserReducer,
  UserNameReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
