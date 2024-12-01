import { createSlice } from "@reduxjs/toolkit";

const initiaPrimerState = {
  primer: null,
  error: null,
  isLoading: false,
};

export const PrimerSlice = createSlice({
  name: "primer",
  initialState: initiaPrimerState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPrimer: (state, action) => {
      (state.primer = action.payload),
        (state.error = null),
        (state.isLoading = false);
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setIsLoading, setPrimer, setError } = PrimerSlice.actions;

export default PrimerSlice.reducer;
