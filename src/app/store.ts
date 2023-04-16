import { configureStore } from "@reduxjs/toolkit";
import gambleReducer from "../features/gambleSlice";

const store = configureStore({
  reducer: {
    gamble: gambleReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
