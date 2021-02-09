const initialState = {
  CheckOutCart: [],
};
const CheckOutCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHECKOUTCART":
      return {
        ...state,
        CheckOutCart: [...state.CheckOutCart, action.payload],
      };
    default:
      return state;
  }
};
export default CheckOutCartReducer;
