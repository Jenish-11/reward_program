import { createSlice } from "@reduxjs/toolkit";
import { addPinPost, addPost, addSchedulePost, deletePost, deleteSchedulePost, getAllPosts, getSchedulePost } from "../services/postService";

// const initialState = {
//   addPost: { data: [], isFetching: false, error: null },
//   addSchedulePost: { data: [], isFetching: false, error: null },
// };
let initialState = {};

const settingCases = [
  { api: addPost, name: "addPost" },
  { api: addSchedulePost, name: "addPost" },
  { api: getAllPosts, name: "posts" },
  { api: addPinPost, name: "addPinPost" },
  { api: deletePost, name: "deletePost" },
  { api: getSchedulePost, name: "getSchedulePost" },
  { api: deleteSchedulePost, name: "deleteSchedulePost" },
];

settingCases.forEach((api) => {
  initialState[api.name] = {
    loading: false,
    data: null,
    error: null,
  };
});

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  extraReducers: (builder) => {
    settingCases.forEach((cases) => {
      builder
        .addCase(cases.api.fulfilled, (state, { payload }) => {
          state[cases.name].loading = false;
          state[cases.name].data = payload ?? null;
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
  },
});

// export const postSlice = createSlice({
//   name: "postSlice",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       // ADD POST
//       .addCase(addPost.fulfilled, (state, { payload }) => {
//         state.addPost.isFetching = false;
//         state.addPost.data = payload;
//       })
//       .addCase(addPost.pending, (state, { payload }) => {
//         state.addPost.isFetching = true;
//         state.addPost.error = null;
//       })
//       .addCase(addPost.rejected, (state, { payload }) => {
//         state.addPost.isFetching = false;
//         state.addPost.error = payload;
//       })
//       // ADD SCHEDULE POST
//       .addCase(addSchedulePost.fulfilled, (state, { payload }) => {
//         state.addSchedulePost.isFetching = false;
//         state.addSchedulePost.data = payload;
//       })
//       .addCase(addSchedulePost.pending, (state, { payload }) => {
//         state.addSchedulePost.isFetching = true;
//         state.addSchedulePost.error = null;
//       })
//       .addCase(addPost.rejected, (state, { payload }) => {
//         state.addSchedulePost.isFetching = false;
//         state.addSchedulePost.error = payload;
//       });
//   },
// });
