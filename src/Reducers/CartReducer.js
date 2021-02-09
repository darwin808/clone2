const initialState = {
  cart: [],
};
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "DELETE_ITEM":
      const newarr = state.cart.filter((e) => e.id !== action.payload);
      return {
        ...state,
        cart: newarr,
      };

    default:
      return state;
  }
};
export default CartReducer;
