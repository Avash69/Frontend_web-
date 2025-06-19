// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

// export const createNewAdmin = createAsyncThunk("admin/createNewAdmin", async (param, thunkAPI) => {
//   try {
//     const { email, adminRank } = param;
//     const LoginToken = JSON.parse(localStorage.getItem("UserData")).loginToken || " ";
//     const header = { headers: { authorization: `Bearer ${LoginToken}` } };

//     const { data } = await axios.get(serverUrl + "/api/v1/admin/createNewAdmin", { email, adminRank }, header);

//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

export const createNewAdmin = createAsyncThunk(
  "admin/createNewAdmin",
  async ({ email, adminRank }, thunkAPI) => {
    try {
      const userData = JSON.parse(localStorage.getItem("UserData")) || {};
      const loginToken = userData.loginToken || "";

      const config = {
        headers: {
          Authorization: `Bearer ${loginToken}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${serverUrl}/api/v1/admin/createNewAdmin`,
        { email, adminRank },
        config
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || error.message || "Failed to create admin"
      );
    }
  }
);
