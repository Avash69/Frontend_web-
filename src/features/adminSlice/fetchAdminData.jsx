// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

// export const fetchAdminDatas = createAsyncThunk("admin/fetchAdminDatas", async (_, thunkAPI) => {
//   try {
//     const LoginToken = JSON.parse(localStorage.getItem("UserData")).loginToken || " ";
//     const header = { headers: { authorization: `Bearer ${LoginToken}` } };

//     const { data } = await axios.get(serverUrl + "/api/v1/admin/fetchAdminDatas", header);

//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

export const fetchAdminDatas = createAsyncThunk(
  "admin/fetchAdminDatas",
  async (_, thunkAPI) => {
    try {
      const userData = JSON.parse(localStorage.getItem("UserData")) || {};
      const loginToken = userData.loginToken;

      if (!loginToken) {
        throw new Error("Unauthorized access: Login token not found.");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      };

      const response = await axios.get(`${serverUrl}/api/v1/admin/fetchAdminDatas`, config);

      return response.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "Failed to fetch admin data.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);
