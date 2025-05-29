import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  }
);
export const fetchById = createAsyncThunk("products/fetchById", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
});
const productSlice = createSlice({
  name: "products",
  initialState: { items: [], product: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //fetch product by id
      .addCase(fetchById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.product = null;
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchById.rejected, (state, action) =>{
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default productSlice.reducer;
