import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
