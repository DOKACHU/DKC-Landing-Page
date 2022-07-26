/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import styled from 'styled-components';
import { TextSection } from '../components';
import { Grid } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

const SectionWrapper = styled.div`
  margin-bottom: 48px;
`;

const Form = styled.form`
  /* padding: 80px; */
  margin: 80px;
`;

const Footer = styled(Grid)`
  border: 1px solid #e5e5e5;
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

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

export default function FormTemplate({ toggle, children }: FormTemplate) {
  const { handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    alert(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <SectionWrapper>
          <TextSection toggle={toggle} />
        </SectionWrapper>
        {children}
        {/* TODO: ref  */}
        <input type="submit" hidden />
      </Form>
      <Footer xs={12}>
        <div>
          <input type="checkbox" />
          <span>이용약관 및 도카추 회원 가입에 동의합니다.</span>
        </div>
        <button type="button">제출하기 </button>
      </Footer>
    </>
  );
}
