import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

// Define persist config
const persistConfig = {
  key: "root",
  storage, // Using localStorage
};

// Combine reducers
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
});

// Create persistor
export const persistor = persistStore(store);

export default store;
