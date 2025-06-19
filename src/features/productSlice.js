// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   allProductsData: [],
//   isLoading: true,
//   placeholderOfproductsDataCurrentlyRequested: [],
//   productsDataForCurrentPage: [],
//   sortedAllProductsData: [],
//   searchedProductData: [],
//   sortedSearchedProductData: [],
//   loadingOrErrorMessage: "Loading",
//   fetchingError: null,
// };

// const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

// export const getAllProductsData = createAsyncThunk("products/getAllProductsData", async (_, thunkAPI) => {
//   try {
//     const { data } = await axios.get(serverUrl + "/api/v1/products");
//     return data.products;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data?.message || error.message);
//   }
// });

// export const productSlice = createSlice({
//   name: "productsSlice",
//   initialState,
//   reducers: {
//     setIsLoading: (state, { payload }) => {
//       state.isLoading = payload;
//     },
//     setPlaceholderOfproductsDataCurrentlyRequested: (state, { payload }) => {
//       payload = payload ? payload : [];
//       state.placeholderOfproductsDataCurrentlyRequested = payload;
//     },
//     setProductsDataForCurrentPage: (state, { payload }) => {
//       payload = payload ? payload : [];
//       state.productsDataForCurrentPage = payload;
//     },
//     setSortedSearchedProductData: (state, { payload }) => {
//       payload = payload ? payload : [];
//       state.sortedSearchedProductData = payload;
//     },
//     setSearchedProductData: (state, { payload }) => {
//       payload = payload ? payload : [];
//       state.searchedProductData = payload;
//     },
//     setSortedAllProductsData: (state, { payload }) => {
//       payload = payload ? payload : [];
//       state.sortedAllProductsData = payload;
//     },
//     setLoadingOrErrorMessage: (state, { payload }) => {
//       payload = payload ? payload : [];
//       state.loadingOrErrorMessage = payload;
//     },
//   },
//   extraReducers: {
//     [getAllProductsData.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [getAllProductsData.fulfilled]: (state, { payload }) => {
//       // setting the objects to empty array before fetched data is received,instead of undefined, to prevent error in Array methods in the frontend
//       payload = payload ? payload : [];
//       state.isLoading = false;
//       state.allProductsData = payload;
//     },
//     [getAllProductsData.rejected]: (state, { payload }) => {
//       state.isLoading = true;
//       state.allProductsData = [];
//       state.fetchingError = true;
//       state.loadingOrErrorMessage = payload;
//     },
//   },
// });

// export const {
//   setIsLoading,
//   setPlaceholderOfproductsDataCurrentlyRequested,
//   setProductsDataForCurrentPage,
//   setSortedAllProductsData,
//   setSearchedProductData,
//   setSortedSearchedProductData,
//   setLoadingOrErrorMessage,
// } = productSlice.actions;

// export default productSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

const initialState = {
  allProductsData: [],
  isLoading: false,
  placeholderOfproductsDataCurrentlyRequested: [],
  productsDataForCurrentPage: [],
  sortedAllProductsData: [],
  searchedProductData: [],
  sortedSearchedProductData: [],
  loadingOrErrorMessage: "Loading",
  fetchingError: null, // null or string with error message
};

export const getAllProductsData = createAsyncThunk(
  "products/getAllProductsData",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(serverUrl + "/api/v1/products");
      return data.products ?? [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message ?? error.message);
    }
  }
);

export const productSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setPlaceholderOfproductsDataCurrentlyRequested: (state, { payload }) => {
      state.placeholderOfproductsDataCurrentlyRequested = payload ?? [];
    },
    setProductsDataForCurrentPage: (state, { payload }) => {
      state.productsDataForCurrentPage = payload ?? [];
    },
    setSortedSearchedProductData: (state, { payload }) => {
      state.sortedSearchedProductData = payload ?? [];
    },
    setSearchedProductData: (state, { payload }) => {
      state.searchedProductData = payload ?? [];
    },
    setSortedAllProductsData: (state, { payload }) => {
      state.sortedAllProductsData = payload ?? [];
    },
    setLoadingOrErrorMessage: (state, { payload }) => {
      state.loadingOrErrorMessage = payload ?? "";
    },
    clearError: (state) => {
      state.fetchingError = null;
      state.loadingOrErrorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsData.pending, (state) => {
        state.isLoading = true;
        state.fetchingError = null;
        state.loadingOrErrorMessage = "Loading...";
      })
      .addCase(getAllProductsData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allProductsData = payload ?? [];
        state.fetchingError = null;
        state.loadingOrErrorMessage = "";
      })
      .addCase(getAllProductsData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.allProductsData = [];
        state.fetchingError = payload ?? "Failed to fetch products";
        state.loadingOrErrorMessage = payload ?? "Failed to fetch products";
      });
  },
});

export const {
  setIsLoading,
  setPlaceholderOfproductsDataCurrentlyRequested,
  setProductsDataForCurrentPage,
  setSortedAllProductsData,
  setSearchedProductData,
  setSortedSearchedProductData,
  setLoadingOrErrorMessage,
  clearError,
} = productSlice.actions;

export default productSlice.reducer;
