import { combineReducers } from '@reduxjs/toolkit';
import employeeSlice from './slices/employeeSlice';

const rootReducer = combineReducers({
  employeeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
