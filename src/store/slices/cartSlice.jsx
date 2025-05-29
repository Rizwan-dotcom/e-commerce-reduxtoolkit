import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const cartFetch = createAsyncThunk("cart/cartFetch", async () => {
  const response = await fetch("https://fakestoreapi.com/carts");
  return response.json();
});   
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], loading: false, error: null },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existItem = state.items.find((item) => item.id === product.id);
      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
   updateQuantity: (state, action) => {
  const { id, quantity } = action.payload;
  if (quantity <= 0) {
    state.items = state.items.filter((item) => item.id !== id);
  } else {
    const item = state.items.find((item) => item.id === id);
    if (item) {
      item.quantity = quantity;
    }
  }
}

  },
  extraReducers: (builder) => {
    builder
      .addCase(cartFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(cartFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(cartFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
