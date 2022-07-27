/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../components';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import { Grid, IconButton } from '@mui/material';
import { AddAPhoto } from '@mui/icons-material';
import { CustomInput, CustomTextArea } from '../components';
import styled from 'styled-components';
import { useState } from 'react';

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
  justify-content: flex-end;
  align-items: center;

  button + button {
    margin-left: 10px;
  }
`;

interface TestProps {
  imagePreviewUrl?: any;
  imageBlob?: any;
}

const PersonalForm = ({ control }: PersonalFormProps) => {
  const [loadedProfileImage, setLoadedProfileImage] = useState<TestProps>({
    imagePreviewUrl: '',
    imageBlob: null,
  });

  const reader = new FileReader(); // FileReader API로 이미지 인식
  const handleProfileImageChange = (e: any) => {
    e.preventDefault();

    const file = e.target.files[0]; // file object는 e.target.files[0]에 있다.

    if (file) {
      reader.readAsDataURL(file); // 1. reader에게 file을 먼저 읽히고
      // 사진 올리고 나서 처리하는 event
      reader.onloadend = () => {
        setLoadedProfileImage({ imagePreviewUrl: reader.result });
        // dispatch(triggerImageCropModal()); // 사진 업로드 하면 crop창 띄움
        e.target.value = ''; // 💖 같은 파일을 올리면 인지못해서 여기서 초기화
      }; // 2. 비동기적으로 load가 끝나면 state에 저장
    }
  };

  return (
    <>
      {/* 4 */}
      <Grid item xs={12}>
        <Controller
          name="profileImage"
          control={control}
          render={({ field }) => {
            return (
              <input
                {...field}
                accept="image/*"
                id="profile-image-input" // label htmlFor
                type="file" // type="file"
                hidden // input을 숨기고 다른 스타일링위해
                onChange={e => {
                  handleProfileImageChange(e);
                }}
              />
            );
          }}
        />
        <label htmlFor="profile-image-input" className="photo-icon">
          <IconButton color="primary" component="span">
            <AddAPhoto />
          </IconButton>
        </label>

        <img alt="" src={loadedProfileImage.imagePreviewUrl || ''} />
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
        <Button type="button" btnType="save">
          임시저장
        </Button>
        <Button type="submit">작성완료</Button>
      </Footer>
    </>
  );
};

export default PersonalForm;
