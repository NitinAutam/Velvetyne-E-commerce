import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { _id, name, price, selectedSize, image } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id == _id && item.selectedSize == selectedSize
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          _id,
          name,
          price,
          selectedSize,
          quantity: 1,
          image,
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
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
