import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./UserSlice";
import { statesSlice } from "./StatesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    states: statesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
