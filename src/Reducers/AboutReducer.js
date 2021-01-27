const AboutReducer = (state = false, action) => {
  switch (action.type) {
    case "TRUE_ABOUT":
      return (state = true);
    case "FALSE_ABOUT":
      return (state = false);
    default:
      return state;
  }
};

export default AboutReducer;
