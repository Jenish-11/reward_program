import { createSlice } from "@reduxjs/toolkit";
const { activityLogListService } = require("redux/service/activityLogService");



const initialState = {
openTabs

};

export const activityLogSlice = createSlice({
  name: "global",
  initialState,
  extraReducers: (builder) => {
    activityLogCases.forEach((cases) => {
      builder
        .addCase(cases.api.fulfilled, (state, { payload }) => {
          state[cases.name].loading = false;
          state[cases.name].data = payload?.data ?? null;
          state[cases.name].error = null;
        })
        .addCase(cases.api.pending, (state) => {
          state[cases.name].loading = true;
          state[cases.name].error = null;
          state[cases.name].data = null;
        })
        .addCase(cases.api.rejected, (state, { payload }) => {
          state[cases.name].loading = false;
          state[cases.name].error = payload;
          state[cases.name].data = null;
        });
    });
    return;
  },
});

export default activityLogSlice.reducer;
