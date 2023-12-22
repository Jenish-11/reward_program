import axios from "axios";
import orm from "../../database/config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const getAwards = createAsyncThunk(
  "getAwards",
  async (params, thunkAPI) => {
    try {
      const res = await API.get("/awards");
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

