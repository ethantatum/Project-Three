import { SET_SELECTED_CLASS } from "../actions/types";

// const isEmpty = require("is-empty");

export const selectClassReducer = (state=null, action) => {
  switch (action.type) {
    case SET_SELECTED_CLASS:
      return action.payload;
    default:
      return state;
  }
}