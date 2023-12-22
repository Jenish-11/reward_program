import { createSlice } from "@reduxjs/toolkit";
import { getTeams } from "../services/teamService";

const initialState = {
    getTeams: { data: [], isFetching: false, error: null },
};

export const teamSlice = createSlice({
  name: "teamSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      // list Product
      .addCase(getTeams.fulfilled, (state, { payload }) => {
        state.getTeams.isFetching = false;
        state.getTeams.data = payload;
      })
      .addCase(getTeams.pending, (state, { payload }) => {
        state.getTeams.isFetching = true;
        state.getTeams.error = null;
      })
      .addCase(getTeams.rejected, (state, { payload }) => {
        state.getTeams.isFetching = false;
        state.getTeams.error = payload;
      });
  },
});
