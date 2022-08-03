/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import { Grid, Checkbox } from '@mui/material';
import { CustomInput, CustomTextArea } from '../components';
import styled from 'styled-components';
import { Button } from '../components';
import { usePostCode } from '../hooks';
import DaumPostcode from 'react-daum-postcode';

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
  const { openPostcode, handle, inputRef } = usePostCode();
  // const inputRef = useRef<any>(null);

  // const handleClick = () => {
  //   inputRef?.current.click();
  // };

  return (
    <>
      {/* 1 병원이름 */}
      <Grid item xs={12}>
        <Controller
          name="centerName"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomInput {...field} label="병원 이름" />}
        />
      </Grid>
      {/* 2 지역 */}
      <Grid item xs={6}>
        <label>지역*</label>
        <Controller
          name="location"
          control={control}
          defaultValue={{ value: '00', label: '서울' }}
          render={({ field }) => (
            <Select
              {...field}
              defaultValue={{ value: '00', label: '서울' }}
              options={[
                { value: '00', label: '서울' },
                { value: '01', label: '인천' },
                { value: '02', label: '대구' },
                { value: '03', label: '부산' },
                { value: '04', label: '광주' },
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
          render={({ field }) => (
            <CustomInput
              {...field}
              label="대표주소"
              ref={inputRef}
              onClick={() => {
                handle.clickButton();
              }}
            />
          )}
        />

        {openPostcode && (
          <DaumPostcode
            onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
            autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
            defaultQuery="판교역로 235" // 팝업을 열때 기본적으로 입력되는 검색어
          />
        )}
      </Grid>

      {/* 4 사업자 등록번호 */}
      <Grid item xs={12}>
        <Grid item xs={6}>
          <Controller
            name="bizzNumber"
            control={control}
            defaultValue={0}
            render={({ field }) => <CustomInput {...field} label="사업자 등록번호" />}
          />
        </Grid>
      </Grid>

      {/* <Grid direction="row" item xs={12}> */}
      {/* 진료항목 */}
      <Grid item xs={6}>
        <Controller
          name="subject"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomInput {...field} label="진료항목" />}
        />
      </Grid>

      {/* 치료사 수 */}
      <Grid item xs={6}>
        <Controller
          name="proCount"
          control={control}
          defaultValue={0}
          render={({ field }) => <CustomInput {...field} label="치료사 수" />}
        />
      </Grid>
      {/* </Grid> */}

      {/* 5 textarea */}
      <Grid item xs={12}>
        <Controller
          name="desc"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomTextArea {...field} label="병원 소개(3000자 제한)" />}
        />
      </Grid>

      {/* 6 담당자 연락처 */}
      <Grid item xs={6}>
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomInput {...field} label="담당자 연락처" />}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomInput {...field} label="정보 수신 이메일" />}
        />
      </Grid>

      {/*TODO: auto complete */}
      <Grid item xs={12}>
        <Controller
          name="tags"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <CustomInput
              {...field}
              type="tags"
              label="병원 검색 키워드 (키워드는 최대 3개가지 입력 가능합니다.)"
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="policy"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomTextArea {...field} label="이용약관" />}
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
        <Button disabled type="submit">
          제출하기
        </Button>
      </Footer>
    </>
  );
};

export default HospitalForm;
