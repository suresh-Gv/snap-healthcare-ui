import { createSlice} from '@reduxjs/toolkit';


export const SessionSlice = createSlice({
  name: 'session',
  initialState: {
    profile: null,
    access_token:null,
  },
  reducers: {
    setProfileDetails: (state,action) => {
      state.profileDetails  = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProfile.pending, (state) => {
  //       // state.status = 'loading';
  //     })
  //     .addCase(fetchProfile.fulfilled, (state, action) => {
  //       // state.status = 'succeeded';
  //       console.log('action',action);
  //       state.profileDetails = action.payload;
  //     })
  //     .addCase(fetchProfile.rejected, (state, action) => {
  //       // state.status = 'failed';
  //       state.error = action.error.message;
  //     });
  // },
});

export const { setProfileDetails} = SessionSlice.actions;
export default SessionSlice.reducer;