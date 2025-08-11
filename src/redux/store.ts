import { combineReducers, createStore } from "redux";
import { cartReducers } from "./reducers/cartReducers";
import { filterReducer } from "./reducers/filterReducers";

export const rootReducer = combineReducers({
  cart: cartReducers,
  filterGame: filterReducer,
});
export const Store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
