import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Tooltip,
  useTheme,
} from '@mui/material';
import { useFormik } from 'formik';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { Employee, updateEmployee } from '../../store/slices/employeeSlice';
import { locations, employeeValidationSchema as validationSchema } from '../../validation/employee';

interface Props {}

const initialValues: Employee = {
  firstName: '',
  lastName: '',
  position: '',
  location: '',
  isActive: false,
};

const DetailView: FC<Props> = () => {
  const { id } = useParams();
  const [isFormDirty, setFormDirty] = useState(false);
  const [tableData, setTableData] = useState<any>({});
  const theme = useTheme();
  const history = useHistory();
  const employeeData = useSelector((state: RootState) => state.employeeSlice.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    const foundData = employeeData.find(data => data.id === id);

    foundData ? setTableData(foundData) : setTableData(initialValues);
  }, [id]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      dispatch(updateEmployee({ id, updatedData: values }));

      formik.resetForm();

      history.push('/');
    },
  });

  useEffect(() => {
    if (tableData) {
      formik.setValues(tableData);
    }
  }, [tableData]);

  useEffect(() => {
    const isDirty = JSON.stringify(formik.values) !== JSON.stringify(tableData || initialValues);

    setFormDirty(isDirty);
  }, [formik.values, tableData]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container width='1000px' height='500px' spacing={1}>
        <Grid container item>
          <Grid item xs={6}>
            <TextField
              name='firstName'
              label='First Name'
              fullWidth
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              disabled={formik.isSubmitting}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name='lastName'
              label='Last Name'
              fullWidth
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              disabled={formik.isSubmitting}
            />
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={6}>
            <TextField
              name='position'
              label='Position'
              fullWidth
              value={formik.values.position}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.position && Boolean(formik.errors.position)}
              helperText={formik.touched.position && formik.errors.position}
              disabled={formik.isSubmitting}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id='location'
              name='location'
              select
              label='Location'
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.location && Boolean(formik.errors.location)}
              helperText={formik.touched.location && formik.errors.location}
            >
              {locations.map(location => {
                return <MenuItem value={location}>{location}</MenuItem>;
              })}
            </TextField>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox
                  id='isActive'
                  name='isActive'
                  value={formik.values.isActive}
                  checked={formik.values.isActive}
                  onChange={formik.handleChange}
                />
              }
              label='Is Active'
            />
            {formik.touched.isActive && formik.errors.isActive && (
              <div>{formik.errors.isActive}</div>
            )}
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={2}>
            <Tooltip
              title='Your message when the form is not dirty'
              open={!isFormDirty}
              enterDelay={500}
            >
              <Button
                color='primary'
                variant='contained'
                style={{
                  backgroundColor: theme.palette.primary.main,
                  opacity: isFormDirty ? '100%' : '40%',
                  color: 'white',
                }}
                type='submit'
                disabled={!isFormDirty}
              >
                Update
              </Button>
            </Tooltip>
          </Grid>
          <Grid item xs={2}>
            <Link to='/'>
              <Button
                color='secondary'
                style={{ backgroundColor: theme.palette.secondary.main, color: 'white' }}
              >
                Return to Table
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default DetailView;
