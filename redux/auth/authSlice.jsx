import { createSlice } from "@reduxjs/toolkit";

const initiaUserState = {
  user: null,
  error: null,
  isLoading: false,
};

export const AuthSlice = createSlice({
  name: "user",
  initialState: initiaUserState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action) => {
      (state.user = action.payload),
        (state.error = null),
        (state.isLoading = false);
    },
    setError: (state, action) => {
      (state.error = action.payload), (state.isLoading = false);
    },
  },
});

export const { setIsLoading, setUser, setError } = AuthSlice.actions;

export default AuthSlice.reducer;
