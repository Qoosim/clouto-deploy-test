import { createSlice } from "@reduxjs/toolkit";

const initialUserInfo = {
  userInfoData: {},
  formError: null,
  sending: false,
};

export const UserInfoFormSlice = createSlice({
  name: "userInfo",
  initialState: initialUserInfo,
  reducers: {
    setSending: (state, action) => {
      state.sending = action.payload;
    },
    updateFormData: (state, action) => {
      (state.userInfoData = {
        ...state.userInfoData,
        ...action.payload,
      }),
        (state.formError = null),
        (state.sending = false);
    },
    setFormError: (state, action) => {
      state.formError = action.payload;
      state.sending = false;
    },
    clearFormData: (state, action) => {
      state.userInfoData = {};
    },
  },
});

export const { setSending, updateFormData, clearFormData, setFormError } =
  UserInfoFormSlice.actions;

export default UserInfoFormSlice.reducer;
