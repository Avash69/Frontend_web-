// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   wishlist: [],
//   cart: [],
// };
// export const wishlistAndCartSlice = createSlice({
//   name: "wishlistAndCartSlice",
//   initialState,
//   reducers: {
//     setWishlist: (state, { payload }) => {
//       payload = payload ? payload : [];
//       state.wishlist = payload;
//     },
//     setCart: (state, { payload }) => {
//       state.cart = payload;
//     },
//   },
// });

// export const { setWishlist, setCart } = wishlistAndCartSlice.actions;

// export default wishlistAndCartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  cart: [],
};

export const wishlistAndCartSlice = createSlice({
  name: "wishlistAndCartSlice",
  initialState,
  reducers: {
    // Replace entire wishlist array
    setWishlist: (state, { payload }) => {
      state.wishlist = payload ?? [];
    },
    // Replace entire cart array
    setCart: (state, { payload }) => {
      state.cart = payload ?? [];
    },

    // Optional: add item to wishlist
    addToWishlist: (state, { payload }) => {
      if (!state.wishlist.find((item) => item._id === payload._id)) {
        state.wishlist.push(payload);
      }
    },

    // Optional: remove item from wishlist
    removeFromWishlist: (state, { payload }) => {
      state.wishlist = state.wishlist.filter((item) => item._id !== payload._id);
    },

    // Optional: add item to cart
    addToCart: (state, { payload }) => {
      if (!state.cart.find((item) => item._id === payload._id)) {
        state.cart.push(payload);
      }
    },

    // Optional: remove item from cart
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item._id !== payload._id);
    },
  },
});

export const { setWishlist, setCart, addToWishlist, removeFromWishlist, addToCart, removeFromCart } =
  wishlistAndCartSlice.actions;

export default wishlistAndCartSlice.reducer;
