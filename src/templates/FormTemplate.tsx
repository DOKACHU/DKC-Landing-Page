/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import styled from 'styled-components';
import { TextSection } from '../components';
import { Grid } from '@mui/material';

const SectionWrapper = styled.div`
  margin-bottom: 48px;
`;

const Footer = styled(Grid)`
  border: 1px solid red;
  position: fixed;
  bottom: 0px;
  padding: 10px 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
interface FormTemplate {
  children: React.ReactNode;
  toggle?: boolean;
}

export default function FormTemplate({ toggle, children }: FormTemplate) {
  return (
    <>
      <SectionWrapper>
        <TextSection toggle={toggle} />
      </SectionWrapper>
      {children}
      <Footer xs={12}>
        <div>
          <input type="checkbox" />
          <span>이용약관 및 도카추 회원 가입에 동의합니다.</span>
        </div>
        <button type="submit">제출</button>
      </Footer>
    </>
  );
}
