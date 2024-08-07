import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { addItem, removeItem, updateQuantity } from "./CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    addItem: addItem,
    removeItem: removeItem,
    updateQuantity: updateQuantity,
  },
});
export default store;
