import React from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { Grid } from '@mui/material';
import { CustomInput, CustomTextArea } from '../components';

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

const PasonalForm = () => {
  const { control } = useForm<IFormInput>();

  return (
    <>
      <Grid container spacing={2}>
        {/* 4 */}
        <Grid item xs={12}>
          <input type="file" />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => <CustomInput {...field} />}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="iceCreamType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
              />
            )}
          />
        </Grid>

        {/* 2 */}
        <Grid item xs={6}>
          <Controller
            name="iceCreamType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="iceCreamType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: 'chocolate', label: 'Chocolate' },
                  { value: 'strawberry', label: 'Strawberry' },
                  { value: 'vanilla', label: 'Vanilla' },
                ]}
              />
            )}
          />
        </Grid>

        {/* 5 textarea */}
        <Grid item xs={12}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => <CustomTextArea {...field} />}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PasonalForm;
