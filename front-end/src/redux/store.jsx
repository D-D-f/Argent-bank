import { createStore, combineReducers } from "redux";
import UserReducer from "./Reducers/ProfilReducer";

const rootReducer = combineReducers({
  UserReducer,
});

const store = createStore(rootReducer);

export default store;
