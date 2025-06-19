// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

// export const fetchIsUserAnAdmin = createAsyncThunk("admin/isUserAnAdmin", async (_, thunkAPI) => {
//   try {
//     const LoginToken = JSON.parse(localStorage.getItem("UserData")).loginToken || " ";
//     const header = { headers: { authorization: `Bearer ${LoginToken}` } };

//     const { data } = await axios.get(serverUrl + "/api/v1/admin/checkIfUserIsAdmin", header);

//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

export const fetchIsUserAnAdmin = createAsyncThunk(
  "admin/isUserAnAdmin",
  async (_, thunkAPI) => {
    try {
      const userData = JSON.parse(localStorage.getItem("UserData")) || {};
      const loginToken = userData.loginToken || "";

      if (!loginToken) {
        throw new Error("Login token not found. Please log in again.");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      };

      const response = await axios.get(`${serverUrl}/api/v1/admin/checkIfUserIsAdmin`, config);

      return response.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || "Failed to verify admin status";
      return thunkAPI.rejectWithValue(message);
    }
  }
);
