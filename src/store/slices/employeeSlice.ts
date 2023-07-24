import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockData } from '../../data/mockData';

export interface Employee {
  firstName: string;
  lastName: string;
  position: string;
  location: string;
  isActive?: boolean;
}

interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: mockData,
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    updateEmployee(state, action: PayloadAction<{ id: string; updatedData: Employee }>) {
      const { id, updatedData } = action.payload;

      const employeeIndex = state.employees.findIndex(employee => employee.id === id);

      if (employeeIndex !== -1) {
        state.employees[employeeIndex] = { ...state.employees[employeeIndex], ...updatedData };
      }
    },
  },
});

export const { updateEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
