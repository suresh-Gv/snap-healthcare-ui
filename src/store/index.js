// store
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import SessionSlice from './SessionSlice';

const persistConfig = {
  key: 'myPersistedSlice',
  storage,
};

const persistedReducer = persistReducer(persistConfig, SessionSlice);

//Slice : reducer
const store = configureStore({
  reducer: {
    session: persistedReducer,
    // Other slices if any
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };






// import { configureStore, } from '@reduxjs/toolkit';
// import ProfileSlice from './ProfileSlice';
// // import {thunk} from 'redux-thunk';


// const store = configureStore({
//   reducer: {
//     profile: ProfileSlice,
//     // middleware: [thunk],
//   },
// })



// export default store;

