const DenimReducer = (state = false, action) => {
  switch (action.type) {
    case "TRUE_DENIM":
      return (state = true);
    case "FALSE_DENIM":
      return (state = false);
    default:
      return state;
  }
};

export default DenimReducer;
