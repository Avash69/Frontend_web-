// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

// export const RegisterUser = createAsyncThunk("users/register", async (userParameter, thunkAPI) => {
//   try {
//     const { email, password, username } = userParameter;
//     const { data } = await axios.post(serverUrl + "/api/v1/auth/register", { email, username, password });
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data?.message || error.message);
//   }
// });
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

export const RegisterUser = createAsyncThunk(
  "users/register",
  async ({ email, username, password }, thunkAPI) => {
    try {
      const response = await axios.post(`${serverUrl}/api/v1/auth/register`, {
        email,
        username,
        password,
      });

      return response.data;
    } catch (error) {
      const errorMsg =
        error?.response?.data?.message || error.message || "Registration failed";

      console.error("Registration error:", errorMsg); // Optional: helpful during development

      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);
