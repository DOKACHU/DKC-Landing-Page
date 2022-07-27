import React, { useState } from 'react';
import { HospitalForm, PersonalForm } from './pages';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { TextSection } from './components';

import { useRegisterCenter } from './hooks';

interface IFormInput {
  centerName: string;
  location: { label: string; value: string };
  address: string;
  bizzNumber: number;
  subject: string;
  proCount: number;
  desc: string;
  phoneNumber: string;
  email: string;
  policy: string;
  checked: boolean;
}

interface PersonalFormInput {
  name: string;
  sex: { label: string; value: string };
  location: { label: string; value: string };
  major: { label: string; value: string };
  info: string;
}

const Block = styled.div`
  margin: 80px;
`;

const Test = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: lightblue;
`;

const Form = styled.form`
  /* border: 1px solid red; */
`;

export default function App() {
  const [toggle, setToggle] = useState(false);
  const { handleSubmit, control } = useForm<IFormInput>();
  const { handleSubmit: personalSubmit, control: personalCtrl } = useForm<PersonalFormInput>();
  const { createCenter } = useRegisterCenter();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    createCenter({
      variables: {
        centerName: data.centerName,
        centerLocation: '없음',
        centerAddress: data.address,
        centerBizzNumber: data.bizzNumber,
        centerSubject: data.subject,
        centerProCount: Number(data.proCount),
        centerDescription: data.desc,
        centerPhone: data.phoneNumber,
        centerEmail: data.email,
      },
    });
  };

  const onPersonalSubmit: SubmitHandler<PersonalFormInput> = data => {
    alert(JSON.stringify(data));
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Block>
      <Test>
        <button onClick={handleToggle}> {!toggle ? '개인' : '병원'}변경 </button>
      </Test>
      <TextSection toggle={toggle} />
      <Form onSubmit={!toggle ? handleSubmit(onSubmit) : personalSubmit(onPersonalSubmit)}>
        <Grid container spacing={2}>
          {!toggle ? <HospitalForm control={control} /> : <PersonalForm control={personalCtrl} />}
        </Grid>
      </Form>
    </Block>
  );
}
