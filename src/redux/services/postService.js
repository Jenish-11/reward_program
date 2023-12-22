import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const addPost = createAsyncThunk("addPost", async (data, thunkAPI) => {
  try {
    if (data == "DESTROY") {
      return null;
    } else {
      const res = await API.post("/post", data);
      return res;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const addSchedulePost = createAsyncThunk(
  "addSchedulePost",
  async (data, thunkAPI) => {
    try {
      if (data == "DESTROY") {
        return null;
      }
      const res = await API.post("/schedule_post", data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//DElete schedulepost
export const deleteSchedulePost = createAsyncThunk(
  "deleteSchedulePost",
  async (id, thunkAPI) => {
    try {
      if (id == "DESTROY") {
        return null;
      }
      const res = await API.delete(`/schedule_post/${id}`);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//GEt SchedulePost
export const getSchedulePost = createAsyncThunk(
  "getSchedulePost",
  async (data, thunkAPI) => {
    try {
      const res = await API.get("/schedule_post", data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAllPosts = createAsyncThunk(
  "getAllPosts",
  async (data, thunkAPI) => {
    try {
      const res = await API.get(
        "/post?_expand=award&_expand=employee&_sort=created_at&_order=desc",
        data
      );
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//delete Posts
export const deletePost = createAsyncThunk(
  "deletePost",
  async (id, thunkAPI) => {
    try {
      if (id == "DESTROY") {
        return null;
      }
      const res = await API.delete(`/post/${id}`);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//pin post
export const addPinPost = createAsyncThunk(
  "addPinPost",
  async (data, thunkAPI) => {
    try {
      if (data == "DESTROY") {
        return null;
      }
      const res = await API.patch(`/post/${data.id}`, data.data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
