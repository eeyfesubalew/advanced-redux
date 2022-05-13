import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItme = state.items.find((item) => item.id === newItem.id);

      if (!existingItme) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItme.quantity++;
        existingItme.totalPrice = existingItme.totalPrice + newItem.price;
      }
    },
  },
});

export default cartSlice;
