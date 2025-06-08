import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      const { _id, selectedSize } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id == _id && item.selectedSize == selectedSize
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          _id,
          selectedSize,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const { _id, selectedSize } = action.payload;
      console.log(
        "Removing item with _id:",
        _id,
        "and selectedSize:",
        selectedSize
      ); // Debug log
      state.cartItems = state.cartItems.filter(
        (item) => !(item._id === _id && item.selectedSize === selectedSize)
      );
    },
    clearLocalCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearLocalCart } = cartSlice.actions;
export default cartSlice.reducer;
