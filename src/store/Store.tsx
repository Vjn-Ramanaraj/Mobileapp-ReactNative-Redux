import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Slices/ProductReducer';


export const store = configureStore({
  reducer: {
    Products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;