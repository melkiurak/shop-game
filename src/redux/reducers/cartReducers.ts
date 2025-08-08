export const cartActionType = {
  COUNT_PRODUCT: "COUNT_PRODUCT",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
} as const;

export const cartReducers = (
  state = { product: 0 },
  action: { type: keyof typeof cartActionType; payload?: number }
) => {
  switch (action.type) {
    case cartActionType.COUNT_PRODUCT:
      return { product: action.payload };
    case cartActionType.ADD_TO_CART:
      return { product: state.product + 1 };
    case cartActionType.REMOVE_FROM_CART:
      return { product: state.product - 1 };
    default:
      return state;
  }
};
