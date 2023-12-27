import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';


export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profileDetails: null,//UserService.getProfile(),
  },
  reducers: {
    setProfileDetails: (state,action) => {
      state.profileDetails  = action.payload;
    },
  },
});

export const { setProfileDetails} = profileSlice.actions;
export default profileSlice.reducer;