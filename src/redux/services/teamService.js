import orm from "../../database/config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const getTeams = createAsyncThunk(
  "getTeams",
  async (params, thunkAPI) => {
    try {
      const res = await API.get("/teams");
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
