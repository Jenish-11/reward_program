import { createSlice } from "@reduxjs/toolkit";
import { getEmployee, getEmployeeByTeam } from "../services/employeeService";

const initialState = {
  getEmployee: { data: [], isFetching: false, error: null },
};

export const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      // list Employees
      .addCase(getEmployee.fulfilled, (state, { payload }) => {
        state.getEmployee.isFetching = false;
        state.getEmployee.data = payload;
      })
      .addCase(getEmployee.pending, (state, { payload }) => {
        state.getEmployee.isFetching = true;
        state.getEmployee.error = null;
      })
      .addCase(getEmployee.rejected, (state, { payload }) => {
        state.getEmployee.isFetching = false;
        state.getEmployee.error = payload;
      })

      //Employee by Team

      .addCase(getEmployeeByTeam.fulfilled, (state, { payload }) => {
        state.getEmployee.isFetching = false;
        state.getEmployee.data = payload;
      })
      .addCase(getEmployeeByTeam.pending, (state, { payload }) => {
        state.getEmployee.isFetching = true;
        state.getEmployee.error = null;
      })
      .addCase(getEmployeeByTeam.rejected, (state, { payload }) => {
        state.getEmployee.isFetching = false;
        state.getEmployee.error = payload;
      });
  },
});
