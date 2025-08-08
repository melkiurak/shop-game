import { createStore } from "redux";
import { cartReducers } from "./reducers/cartReducers";

export const Store = createStore(cartReducers);
