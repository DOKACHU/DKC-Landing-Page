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

const HospitalForm = () => {
  const { control } = useForm<IFormInput>();
  return (
    <>
      <Grid container spacing={2}>
        {/* 1 */}
        <Grid item xs={12}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => <CustomInput {...field} />}
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

        {/* 3 */}
        <Grid item xs={12}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => <CustomInput {...field} />}
          />
        </Grid>

        {/* 4 */}
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
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => <CustomInput {...field} />}
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

        {/* 6 */}
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
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => <CustomInput {...field} />}
          />
        </Grid>

        {/* auto complete */}
        <Grid item xs={12}>
          <div>auto complete</div>
        </Grid>

        {/* last */}
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

export default HospitalForm;
