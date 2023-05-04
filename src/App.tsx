/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { CenterForm, PersonalForm } from './pages';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { Grid, Container } from '@mui/material';
import { TextSection } from './components';

import {
  useUploadImage,
  useMultipleUpload,
  useCreateCenter,
  useRegisterCenter,
  usePostCode,
  useCreatePro,
} from './hooks';

interface IFormInput {
  centerName: string;
  location: { label: string; value: string };
  address: string;
  detailAddress: string;
  bizzNumber: number;
  subject: { label: string; value: string };
  proCount: number;
  desc: string;
  phoneNumber: string;
  email: string;
  tags: string;
  policy: string;
  checked: boolean;
}

interface PersonalFormInput {
  profileImg: any;
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
  const multipleProps = useMultipleUpload();
  const tagProps = useRegisterCenter();
  const postProps = usePostCode();

  const { handleSubmit, control } = useForm<IFormInput>();
  const { handleSubmit: personalSubmit, control: personalCtrl } = useForm<PersonalFormInput>();
  const {
    loadedProfileImage,
    handleProfileImageChange,
    handleRemove,
    loadedBusinessImage,
    handleBusinessImageChange,
  } = useUploadImage();

  const { mutate: createCenter } = useCreateCenter();
  const { mutate: createPro } = useCreatePro();

  const [career, setCareer] = useState([
    {
      startYear: '',
      startMonth: '',
      endYear: '',
      endMonth: '',
      content: '',
    },
  ]);

  const [school, setSchool] = useState([
    {
      startYear: '',
      startMonth: '',
      endYear: '',
      endMonth: '',
      content: '',
    },
  ]);

  const [license, setLicense] = useState([
    {
      licenseName: '',
      licenseNumber: '',
      registerYear: '',
      registerMonth: '',
      registerDay: '',
    },
  ]);

  const [channel, setChannel] = useState([
    {
      content: '',
    },
  ]);

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const { postImages, rawFiles } = multipleProps;
    const { tags } = tagProps;
    console.log({ data, postImages, loadedBusinessImage, tags });
    const {
      centerName,
      proCount,
      location,
      bizzNumber,
      address,
      detailAddress,
      subject,
      phoneNumber,
      email,
      desc,
    } = data;

    const formData = new FormData(); // 새로운 폼 객체 생성
    for (let i = 0; i < rawFiles.length; i++) {
      formData.append('centerImages', rawFiles[i]);
    }

    formData.append('registration', loadedBusinessImage.imageBlob); // <input name="item" value="hi"> 와 같다.
    formData.append('centerName', centerName);
    formData.append('city', location.label);

    formData.append('address1', address);
    formData.append('address2', detailAddress);
    formData.append('businessRegistrationNumber', String(bizzNumber));
    formData.append('memberCount', String(proCount));

    formData.append('therapyCategory', subject?.label);
    formData.append('phoneNumber', phoneNumber);

    formData.append('email', email);
    formData.append('description', desc);
    for (let i = 0; i < tags.length; i++) {
      formData.append(`tags[${i}]`, tags[i]);
    }

    createCenter(formData, {
      onError: e => {
        console.log({ e });
      },
      onSuccess: res => {
        console.log({ res });
        alert('센터 입점 양식 등록 완료 ');
      },
    });
  };

  const onPersonalSubmit: SubmitHandler<PersonalFormInput> = async data => {
    // alert(JSON.stringify(data));
    const { rawFiles } = multipleProps;
    const { name, location, major, info, sex } = data;
    console.log({ data, rawFiles, loadedProfileImage, career, school, license, channel });

    const formData = new FormData(); // 새로운 폼 객체 생성
    for (let i = 0; i < rawFiles.length; i++) {
      formData.append('proImages', rawFiles[i]);
    }
    formData.append('licenseImage', loadedProfileImage.imageBlob); // <input name="item" value="hi"> 와 같다.
    formData.append('proName', name);
    formData.append('gender', sex.label);

    formData.append('city', location.label);
    formData.append('therapyCategory', major.label);
    formData.append('description', info);

    for (let i = 0; i < career.length; i++) {
      formData.append(`careers[${i}][centerName]`, career[i].content);
      formData.append(`careers[${i}][startDate]`, `${career[i].startYear}-${career[i].startMonth}`);
      formData.append(`careers[${i}][endDate]`, `${career[i].endYear}-${career[i].endMonth}`);
    }

    for (let i = 0; i < school.length; i++) {
      formData.append(`educations[${i}][schoolName]`, school[i].content);
      formData.append(
        `educations[${i}][startDate]`,
        `${school[i].startYear}-${career[i].startMonth}`,
      );
      formData.append(`educations[${i}][endDate]`, `${school[i].endYear}-${career[i].endMonth}`);
    }

    for (let i = 0; i < license.length; i++) {
      formData.append(`licenses[${i}][licenseName]`, license[i].licenseName);
      formData.append(`licenses[${i}][licenseNumber]`, license[i].licenseNumber);
      formData.append(
        `licenses[${i}][issueDate]`,
        `${license[i].registerYear}-${license[i].registerMonth}`,
      );
    }

    for (let i = 0; i < channel.length; i++) {
      formData.append(`channels[${i}]`, channel[i].content);
    }

    createPro(formData, {
      onError: e => {
        console.log({ e });
      },
      onSuccess: res => {
        console.log({ res });
        alert('프로 입점 양식 등록 완료 ');
      },
    });
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Block>
      <Container>
        <Test>
          <button onClick={handleToggle}> {!toggle ? '개인' : '병원'}변경 </button>
        </Test>
        <TextSection toggle={toggle} />
        <Form onSubmit={toggle ? handleSubmit(onSubmit) : personalSubmit(onPersonalSubmit)}>
          <Grid container spacing={2}>
            {toggle ? (
              <CenterForm
                {...postProps}
                {...multipleProps}
                {...tagProps}
                control={control}
                loadedBusinessImage={loadedBusinessImage}
                handleBusinessImageChange={handleBusinessImageChange}
                handleRemove={handleRemove}
              />
            ) : (
              <PersonalForm
                {...multipleProps}
                channel={channel}
                setChannel={setChannel}
                license={license}
                setLicense={setLicense}
                career={career}
                setCareer={setCareer}
                school={school}
                setSchool={setSchool}
                control={personalCtrl}
                loadedProfileImage={loadedProfileImage}
                handleProfileImageChange={handleProfileImageChange}
                handleRemove={handleRemove}
              />
            )}
          </Grid>
        </Form>
      </Container>
    </Block>
  );
}
