// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

// export const fetchIsTokenValid = createAsyncThunk("users/isTokenValid", async (_, thunkAPI) => {
//   try {
//     const LoginToken = JSON.parse(localStorage.getItem("UserData")).loginToken || " ";
//     const header = { headers: { authorization: `Bearer ${LoginToken}` } };

//     const { data } = await axios.get(serverUrl + "/api/v1/auth/isTokenValid", header);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(false);
//   }
// });
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

export const fetchIsTokenValid = createAsyncThunk(
  "users/isTokenValid",
  async (_, thunkAPI) => {
    try {
      const storedUser = localStorage.getItem("UserData");
      const LoginToken = storedUser ? JSON.parse(storedUser).loginToken : "";

      if (!LoginToken) {
        return thunkAPI.rejectWithValue("No token found");
      }

      const headers = {
        headers: {
          Authorization: `Bearer ${LoginToken}`,
        },
      };

      const response = await axios.get(`${serverUrl}/api/v1/auth/isTokenValid`, headers);
      return response.data; // Should be { isValid: true } or similar
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "Token validation failed.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);
