import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import heroReducer from './../Landing/Hero/heroSlice'
import cursorReducer from './../Cursor/cursorSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hero: heroReducer,
    cursor: cursorReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
