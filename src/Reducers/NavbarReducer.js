const NavbarReducer = (state = false, action) => {
  switch (action.type) {
    case "NAVCOLOR_HOVER_ON":
      return (state = true);
    case "NAVCOLOR_HOVER_OFF":
      return (state = false);
    default:
      return state;
  }
};

export default NavbarReducer;
