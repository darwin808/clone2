import { combineReducers } from "redux";
import NavbarReducer from "./NavbarReducer";
import CounterReducer from "./CounterReducer";
import MenReducer from "./MenReducer";
import WomenReducer from "./WomenReducer";
import DenimReducer from "./DenimReducer";
import AboutReducer from "./AboutReducer";
import CartReducer from "./CartReducer";
import DbDataReducer from "./DbDataReducer";
import MiniMenImgReducer from "./MiniMenImgReducer";
import CheckOutCartReducer from "./CheckoutCartReducer";
import SubtotalReducer from "./SubtotalReducer";
const AllReducers = combineReducers({
  NavbarReducer,
  SubtotalReducer,
  CounterReducer,
  MenReducer,
  WomenReducer,
  DenimReducer,
  AboutReducer,
  CartReducer,
  DbDataReducer,
  MiniMenImgReducer,
  CheckOutCartReducer,
});

export default AllReducers;
