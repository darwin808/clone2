const WomenReducer = (state = false, action) => {
  switch (action.type) {
    case "TRUE_WOMEN":
      return (state = true);
    case "FALSE_WOMEN":
      return false;

    default:
      return state;
  }
};

export default WomenReducer;
