// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   selectedSubCategoryForFilter: null,
//   selectedCategory: null,
//   priceRange: null,
// };

// export const filterBySlice = createSlice({
//   name: "filterBySlice",
//   initialState,
//   reducers: {
//     setSelectedSubCategoryForFilter: (state, { payload }) => {
//       state.selectedSubCategoryForFilter = payload;
//     },
//     setSelectedCategory: (state, { payload }) => {
//       state.selectedCategory = payload;
//     },
//     setPriceRange: (state, { payload }) => {
//       state.priceRange = payload;
//     },
//   },
// });

// export const { setPriceRange, setSelectedCategory, setSelectedSubCategoryForFilter } = filterBySlice.actions;

// export default filterBySlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSubCategoryForFilter: null,  // Currently selected sub-category filter
  selectedCategory: null,              // Currently selected category filter
  priceRange: null,                    // Selected price range filter, e.g. { min: 0, max: 100 }
};

export const filterBySlice = createSlice({
  name: "filterBy",
  initialState,
  reducers: {
    setSelectedSubCategoryForFilter: (state, { payload }) => {
      state.selectedSubCategoryForFilter = payload;
      // Optional: reset category or price if needed to avoid conflicting filters
      // state.selectedCategory = null;
      // state.priceRange = null;
    },
    setSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
      // Optional: reset sub-category if needed
      // state.selectedSubCategoryForFilter = null;
      // state.priceRange = null;
    },
    setPriceRange: (state, { payload }) => {
      state.priceRange = payload;
      // Optional: reset other filters if desired
      // state.selectedCategory = null;
      // state.selectedSubCategoryForFilter = null;
    },
    resetAllFilters: (state) => {
      state.selectedSubCategoryForFilter = null;
      state.selectedCategory = null;
      state.priceRange = null;
    },
  },
});

export const {
  setPriceRange,
  setSelectedCategory,
  setSelectedSubCategoryForFilter,
  resetAllFilters,
} = filterBySlice.actions;

export default filterBySlice.reducer;

