// import { createSlice } from "@reduxjs/toolkit";
// import { RegisterUser } from "./register";
// import { loginUser } from "./login";
// import { fetchForgotPasswordClick } from "./fetchForgotPasswordClick";
// import { fetchIsTokenValid } from "./fetchIsTokenValid";
// import { fetchResendEmailVerificationLink } from "./resendEmailVerification";
// import { toast } from "react-toastify";

// const initialState = {
//   isLoggedIn: false,
//   isLoading: false,
//   isTokenValidLoader: false,
//   userData: "",
//   shippingMethod: "standard",
// };

// export const authSlice = createSlice({
//   name: "authSlice",
//   initialState,
//   reducers: {
//     setShippingMethod: (state, { payload }) => {
//       state.shippingMethod = payload;
//     },
//     getUserData: (state, { payload }) => {
//       state.userData = payload;
//     },
//     setIsLoading: (state, { payload }) => {
//       state.isLoading = payload;
//     },
//     setIsLoggedIn: (state, { payload }) => {
//       state.isLoggedIn = payload;
//     },
//   },
//   extraReducers: {
//     //register reducers
//     [RegisterUser.pending]: (state) => {
//       state.isLoading = true;
//       state.errorMessageInRegisterPage = "";
//       state.successMessageInRegisterPage = "";
//     },
//     [RegisterUser.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;

//       toast(payload, {
//         type: "success",
//         autoClose: 3000,
//         position: "top-center",
//       });
//     },
//     [RegisterUser.rejected]: (state, { payload }) => {
//       state.isLoading = false;

//       toast(payload, {
//         type: "error",
//         autoClose: 4000,
//         position: "top-center",
//       });
//     },

//     // login reducers
//     [loginUser.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [loginUser.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;

//       state.isLoggedIn = true;

//       localStorage.setItem("UserData", JSON.stringify(payload.userData));
//       state.userData = payload.userData;
//       toast(payload.message, {
//         type: "success",
//         autoClose: 3000,
//         position: "top-center",
//       });
//     },
//     [loginUser.rejected]: (state, { payload }) => {
//       state.isLoading = false;

//       toast(payload, {
//         type: "error",
//         autoClose: 3000,
//         position: "top-center",
//       });
//     },
//     // fetch forgotpasssword click controller from server
//     [fetchForgotPasswordClick.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [fetchForgotPasswordClick.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       toast(payload, {
//         type: "success",
//         autoClose: 3000,
//         position: "top-center",
//       });
//     },
//     [fetchForgotPasswordClick.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       toast(payload, {
//         type: "error",
//         autoClose: 3000,
//         position: "top-center",
//       });
//     },
//     //resend email verification
//     [fetchResendEmailVerificationLink.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [fetchResendEmailVerificationLink.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       toast(payload, {
//         type: "success",
//         autoClose: 4000,
//         position: "top-center",
//       });
//     },
//     [fetchResendEmailVerificationLink.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       toast(payload, {
//         type: "error",
//         autoClose: 4000,
//         position: "top-center",
//       });
//     },
//     // fetch isTokenValid controller from servers
//     [fetchIsTokenValid.pending]: (state) => {
//       state.isTokenValidLoader = true;
//     },
//     [fetchIsTokenValid.fulfilled]: (state, { payload }) => {
//       state.isTokenValidLoader = false;
//       state.isLoggedIn = true;
//     },
//     [fetchIsTokenValid.rejected]: (state, { payload }) => {
//       state.isLoggedIn = false;
//       state.userData = "";
//       state.isTokenValidLoader = false;
//     },
//   },
// });

// export const { setIsLoading, setIsLoggedIn, getUserData, setShippingMethod } = authSlice.actions;

// export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { RegisterUser } from "./register";
import { loginUser } from "./login";
import { fetchForgotPasswordClick } from "./fetchForgotPasswordClick";
import { fetchIsTokenValid } from "./fetchIsTokenValid";
import { fetchResendEmailVerificationLink } from "./resendEmailVerification";
import { toast } from "react-toastify";

const TOAST_CONFIG = {
  position: "top-center",
  autoClose: 3000,
};

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  isTokenValidLoader: false,
  userData: null,
  shippingMethod: "standard",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setShippingMethod: (state, { payload }) => {
      state.shippingMethod = payload;
    },
    getUserData: (state, { payload }) => {
      state.userData = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
      localStorage.removeItem("UserData");
    },
  },
  extraReducers: (builder) => {
    builder

      // Register
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(RegisterUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast(payload, { type: "success", ...TOAST_CONFIG });
      })
      .addCase(RegisterUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast(payload, { type: "error", autoClose: 4000, ...TOAST_CONFIG });
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = payload.userData;
        localStorage.setItem("UserData", JSON.stringify(payload.userData));
        toast(payload.message, { type: "success", ...TOAST_CONFIG });
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast(payload, { type: "error", ...TOAST_CONFIG });
      })

      // Forgot Password
      .addCase(fetchForgotPasswordClick.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchForgotPasswordClick.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast(payload, { type: "success", ...TOAST_CONFIG });
      })
      .addCase(fetchForgotPasswordClick.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast(payload, { type: "error", ...TOAST_CONFIG });
      })

      // Resend Email Verification
      .addCase(fetchResendEmailVerificationLink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchResendEmailVerificationLink.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast(payload, { type: "success", autoClose: 4000, ...TOAST_CONFIG });
      })
      .addCase(fetchResendEmailVerificationLink.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast(payload, { type: "error", autoClose: 4000, ...TOAST_CONFIG });
      })

      // Check Token Validity
      .addCase(fetchIsTokenValid.pending, (state) => {
        state.isTokenValidLoader = true;
      })
      .addCase(fetchIsTokenValid.fulfilled, (state) => {
        state.isTokenValidLoader = false;
        state.isLoggedIn = true;
      })
      .addCase(fetchIsTokenValid.rejected, (state) => {
        state.isTokenValidLoader = false;
        state.isLoggedIn = false;
        state.userData = null;
        localStorage.removeItem("UserData");
      });
  },
});

export const {
  setIsLoading,
  setIsLoggedIn,
  getUserData,
  setShippingMethod,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
