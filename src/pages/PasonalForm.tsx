import React from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { Grid } from '@mui/material';
import { CustomInput, CustomTextArea } from '../components';
import styled from 'styled-components';

interface PersonalFormProps {
  control: any;
}
const Footer = styled(Grid)`
  border: 1px solid #e5e5e5;
  position: fixed;
  bottom: 0px;
  left: 0px;
  padding: 10px 80px;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PasonalForm = ({ control }: PersonalFormProps) => {
  return (
    <>
      {/* 4 */}
      <Grid item xs={12}>
        <input type="file" />
      </Grid>

      <Grid item xs={6}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomInput {...field} />}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          name="sex"
          control={control}
          render={({ field }) => (
            <Select
              defaultValue={{ value: 'chocolate', label: 'Chocolate' }}
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
          name="location"
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
          name="major"
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
          name="info"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomTextArea {...field} />}
        />
      </Grid>

      <Footer xs={12}>
        <button type="button">임시저장</button>
        <button type="submit">작성완료</button>
      </Footer>
    </>
  );
};

export default PasonalForm;
