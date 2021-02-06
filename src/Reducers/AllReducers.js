import { combineReducers } from "redux";
import NavbarReducer from "./NavbarReducer";
import CounterReducer from "./CounterReducer";
import MenReducer from "./MenReducer";
import WomenReducer from "./WomenReducer";
import DenimReducer from "./DenimReducer";
import AboutReducer from "./AboutReducer";
import CartReducer from "./CartReducer";
import DbDataReducer from "./DbDataReducer";
const AllReducers = combineReducers({
  NavbarReducer,
  CounterReducer,
  MenReducer,
  WomenReducer,
  DenimReducer,
  AboutReducer,
  CartReducer,
  DbDataReducer,
});

export default AllReducers;
