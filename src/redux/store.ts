import { combineReducers, createStore } from "redux";
import { cartReducers } from "./reducers/cartReducers";

export const rootReducer = combineReducers({
  cart: cartReducers,
});
export const Store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
