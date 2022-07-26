import React from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Checkbox } from '@mui/material';
import { CustomInput, CustomTextArea } from '../components';
import styled from 'styled-components';

interface HospitalFormProps {
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

const HospitalForm = ({ control }: HospitalFormProps) => {
  return (
    <>
      {/* 1 병원이름 */}
      <Grid item xs={12}>
        <Controller
          name="hospital"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomInput {...field} />}
        />
      </Grid>
      {/* 2 지역 */}
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

      {/* 3 대표주소 */}
      <Grid item xs={12}>
        <Controller
          name="address"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomInput {...field} />}
        />
      </Grid>

      {/* 4 사업자 등록번호 */}
      <Grid item xs={6}>
        <Controller
          name="bizzNumber"
          control={control}
          defaultValue={0}
          render={({ field }) => <CustomInput {...field} />}
        />
      </Grid>

      {/* 진료항목 */}
      <Grid item xs={6}>
        <Controller
          name="subject"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomInput {...field} />}
        />
      </Grid>

      {/* 치료사 수 */}

      <Grid item xs={6}>
        <Controller
          name="proCount"
          control={control}
          defaultValue={0}
          render={({ field }) => <CustomInput {...field} />}
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

      {/* 6 담당자 연락처 */}
      <Grid item xs={6}>
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomInput {...field} />}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomInput {...field} />}
        />
      </Grid>

      {/* auto complete */}
      <Grid item xs={12}>
        <div>auto complete</div>
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="policy"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomTextArea {...field} />}
        />
      </Grid>

      {/* last */}
      <Footer xs={12}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Controller
            name="checked"
            control={control}
            defaultValue={false}
            render={({ field }) => <Checkbox {...field} />}
          />
          <span>이용약관 및 도카추 회원 가입에 동의합니다.</span>
        </div>
        <button type="submit">제출하기</button>
      </Footer>
    </>
  );
};

export default HospitalForm;
