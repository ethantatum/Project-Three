import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import {selectClassReducer} from "./appReducer";

export default combineReducers({
  auth: authReducer,
  selectedClass: selectClassReducer,
  errors: errorReducer
});