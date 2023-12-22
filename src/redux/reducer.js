import { combineReducers } from "@reduxjs/toolkit";
import { employeeSlice } from "./slice/employeeSlice";
import { teamSlice } from "./slice/teamSlice";
import { rewardSlice } from "./slice/rewardSlice";
import { postSlice } from "./slice/postSlice";

const reducers = combineReducers({
  employeeSlice: employeeSlice.reducer,
  teamSlice: teamSlice.reducer,
  rewardSlice: rewardSlice.reducer,
  postSlice: postSlice.reducer,
  //   essential: essentialSlice.reducer,
});

export default reducers;
