/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Typography } from '@mui/material';

import styled from 'styled-components';

const Block = styled.div`
  margin-bottom: 48px;
`;

export default function TextSection({ toggle }: any) {
  return (
    <Block>
      <Typography variant="h4" component="div" fontWeight={600}>
        {!toggle ? '병원 / 치료사 정보를 등록해주세요.' : '프로필 정보를 등록해주세요.'}
      </Typography>

      <Typography variant="subtitle1" gutterBottom component="div" fontWeight={600}>
        도카츄는 병원 / 치료사들에게 편리한 환경을 제공하기 위해, 다음 정보를 리뷰하여 병원 등록을
        승인하고 있습니다
        {/* {toggle
          ? "도카츄는 병원 / 치료사들에게 편리한 환경을 제공하기 위해, 다음 정보를 리뷰하여 병원 등록을 승인하고 있습니다."
          : "도카츄는 병원 / 치료사들에게 편리한 환경을 제공하기 위해, 다음 정보를 리뷰하여 병원 등록을 승인하고 있습니다."} */}
      </Typography>
    </Block>
  );
}
