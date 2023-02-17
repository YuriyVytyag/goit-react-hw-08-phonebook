import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import contactReducer from './phoneSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';
import { authReducer } from './authSlice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

// const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: persistReducer(persistConfig, authReducer),
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
