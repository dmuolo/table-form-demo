import * as Yup from 'yup';

export const locations = ['Remote', 'Lenexa, KS', 'Kansas City, MO', 'Scranton, PA'];

export const employeeValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  position: Yup.string().required('Position is required'),
  location: Yup.string().oneOf(locations, 'Invalid location'),
  isActive: Yup.boolean(),
});
