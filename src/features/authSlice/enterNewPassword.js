// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

// export const enterNewPasswordAsync = createAsyncThunk(
//   "users/enterNewPasswordAsync",
//   async ({ password, token }, thunkAPI) => {
//     try {
//       const { data } = await axios.post(
//         serverUrl + "/api/v1/auth/changePassword",
//         { password },
//         { headers: { token: token } }
//       );

//       return { data, success: true };
//     } catch (error) {
//       return { errorMsg: error?.response.data.message || error.message, success: false };
//     }
//   }
// );
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

export const enterNewPasswordAsync = createAsyncThunk(
  "users/enterNewPasswordAsync",
  async ({ password, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${serverUrl}/api/v1/auth/changePassword`,
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || "Failed to update password.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);
