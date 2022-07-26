/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
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

const PersonalForm = ({ control }: PersonalFormProps) => {
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
          render={({ field }) => <CustomInput {...field} label="이름" />}
        />
      </Grid>
      <Grid item xs={6}>
        <label>성별*</label>
        <Controller
          name="sex"
          control={control}
          render={({ field }) => (
            <Select
              defaultValue={{ value: 'male', label: '남자' }}
              {...field}
              options={[
                { value: 'male', label: '남자' },
                { value: 'female', label: '여자' },
              ]}
            />
          )}
        />
      </Grid>

      {/* 2 */}
      <Grid item xs={6}>
        <label>지역*</label>
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
        <label>담당 업무*</label>
        <Controller
          name="major"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              defaultValue={{ value: '1', label: '도수치료' }}
              options={[
                { value: '1', label: '도수치료' },
                { value: '2', label: '카이로프택틱' },
                { value: '3', label: '추나요법' },
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
          render={({ field }) => <CustomTextArea {...field} label="간단 소개글 (3000자 이내)" />}
        />
      </Grid>

      <Footer xs={12}>
        <button type="button">임시저장</button>
        <button type="submit">작성완료</button>
      </Footer>
    </>
  );
};

export default PersonalForm;
