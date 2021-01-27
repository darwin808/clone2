import { bindActionCreators } from "redux";

const MenReducer = (state = false, action) => {
  switch (action.type) {
    case "FALSE_MEN":
      return (state = false);
    case "TRUE_MEN":
      return (state = true);
    default:
      return state;
  }
};

export default MenReducer;
