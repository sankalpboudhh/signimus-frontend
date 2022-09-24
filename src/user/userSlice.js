import { createSlice } from "@reduxjs/toolkit";

const getUser = () => {
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  return user;
};

const initialState = {
  user: getUser(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userDetails: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
  },
});

export const { userDetails } = userSlice.actions;

export default userSlice.reducer;
