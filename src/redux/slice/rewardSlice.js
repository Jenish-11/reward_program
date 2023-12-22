import { createSlice } from "@reduxjs/toolkit";
import { getAwards } from "../services/rewardService";

const initialState = {
  getAwards: { data: [], isFetching: false, error: null },
  addPost: { data: [], isFetching: false, error: null },
  addSchedulePost: { data: [], isFetching: false, error: null },
};

export const rewardSlice = createSlice({
  name: "rewardSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      // list Product
      .addCase(getAwards.fulfilled, (state, { payload }) => {
        state.getAwards.isFetching = false;
        state.getAwards.data = payload;
      })
      .addCase(getAwards.pending, (state, { payload }) => {
        state.getAwards.isFetching = true;
        state.getAwards.error = null;
      })
      .addCase(getAwards.rejected, (state, { payload }) => {
        state.getAwards.isFetching = false;
        state.getAwards.error = payload;
      });
  },
});
