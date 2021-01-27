import { combineReducers } from "redux";
import NavbarReducer from "./NavbarReducer";
import CounterReducer from "./CounterReducer";
import MenReducer from "./MenReducer";
import WomenReducer from "./WomenReducer";
import DenimReducer from "./DenimReducer";
import AboutReducer from "./AboutReducer";

const AllReducers = combineReducers({
  NavbarReducer,
  CounterReducer,
  MenReducer,
  WomenReducer,
  DenimReducer,
  AboutReducer,
});

export default AllReducers;
