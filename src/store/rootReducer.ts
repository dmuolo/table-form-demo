import { combineReducers } from '@reduxjs/toolkit';

// slices
import counterSlice from './slices/counterSlice';

const rootReducer = combineReducers({
  counterSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;