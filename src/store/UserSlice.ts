import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: string;
  zipCode: number;
}

const userInitialState: User[] = [];

export const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
