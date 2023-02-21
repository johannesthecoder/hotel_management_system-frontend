import { createSlice } from "@reduxjs/toolkit";

export const rootSlice = createSlice({
  name: "root",
  initialState: {
    loggedInUser: {
      name: {
        first: "Johannes",
        last: "Tesfay",
      },
      position: "Admin",
      roles: [],
    },
  },
  reducers: {
    updateLoggedInUser: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { updateLoggedInUser } = rootSlice.actions;

export const selectLoggedInUser = (state) => state.root.loggedInUser;

export default rootSlice.reducer;
