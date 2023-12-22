import axios from "axios";
import orm from "../../database/config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const getEmployee = createAsyncThunk(
  "getEmployee",
  async (params, thunkAPI) => {
    try {
      const res = await API.get("/employees");
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getEmployeeByTeam = createAsyncThunk(
  "getEmployeeByTeam",
  async (id, thunkAPI) => {
    try {
      const res = await API.get(`/employees?teamId=${id}`);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// **** Functions **** //

/**
 * Get one user.
//  */
// async function getOne(email) {
//   for (const user of db.users) {
//     if (user.email === email) {
//       return user;
//     }
//   }
//   return null;
// }

// /**
//  * See if a user with the given id exists.
//  */
// async function persists(id) {
//   const db = await orm.openDb();
//   for (const user of db.users) {
//     if (user.id === id) {
//       return true;
//     }
//   }
//   return false;
// }

/**
 * Get all users.
 */
// async function getAll() {
//   const db = await orm.openDb();
//   return db.users;
// }

// /**
//  * Add one user.
//  */
// async function add(user) {
//   const db = await orm.openDb();
//   user.id = getRandomInt();
//   db.users.push(user);
//   return orm.saveDb(db);
// }

// /**
//  * Update a user.
//  */
// async function update(user) {
//   const db = await orm.openDb();
//   for (let i = 0; i < db.users.length; i++) {
//     if (db.users[i].id === user.id) {
//       db.users[i] = user;
//       return orm.saveDb(db);
//     }
//   }
// }

// /**
//  * Delete one user.
//  */
// async function delete_(id) {
//   const db = await orm.openDb();
//   for (let i = 0; i < db.users.length; i++) {
//     if (db.users[i].id === id) {
//       db.users.splice(i, 1);
//       return orm.saveDb(db);
//     }
//   }
// }

// // **** Export default **** //

// export default {
//   getOne,
//   persists,
//   getAll,
//   add,
//   update,
//   delete: delete_,
// };
