import type { CartType } from "../../types";

export const cartActionType = {
  COUNT_PRODUCT: "COUNT_PRODUCT",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
} as const;

type CartState = {
  games: CartType[];
};

const initialState: CartState = {
  games: JSON.parse(localStorage.getItem("gameInCart") || "[]"),
};

export const cartReducers = (
  state = initialState,
  action: { type: keyof typeof cartActionType; payload?: CartType }
) => {
  switch (action.type) {
    case cartActionType.COUNT_PRODUCT:
      return state;
    case cartActionType.ADD_TO_CART: {
      const games = Array.isArray(state.games) ? state.games : [];
      return { ...state, games: [...games, action.payload] };
    }
    default:
      return state;
  }
};
