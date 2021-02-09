const SubtotalReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_SUBTOTAL":
      return { ...state, state: action.payload };
    default:
      return state;
  }
};
export default SubtotalReducer;
