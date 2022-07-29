/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../components';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import { Grid } from '@mui/material';
import { CustomInput, CustomTextArea } from '../components';
import styled from 'styled-components';
import { useState } from 'react';
import defaultImg from './default.png';

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

const CustomImgWrapper = styled.div`
  border: 1px solid #f4f4f4;
  border-radius: 16px;
  width: 240px;
  height: 240px;

  &:hover {
    filter: brightness(90%);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

interface ImageProps {
  imagePreviewUrl?: any;
  imageBlob?: any;
}

const PersonalForm = ({ control }: PersonalFormProps) => {
  const imageInit = {
    imagePreviewUrl: '',
    imageBlob: null,
  };
  const [loadedProfileImage, setLoadedProfileImage] = useState<ImageProps>(imageInit);

  const reader = new FileReader();
  const handleProfileImageChange = (e: any) => {
    e.preventDefault();

    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setLoadedProfileImage({ imagePreviewUrl: reader.result });

        e.target.value = '';
      };
    }
  };

  const handleRemove = () => {
    setLoadedProfileImage(imageInit);
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

        <CustomImgWrapper>
          <label htmlFor="profile-image-input">
            {loadedProfileImage.imagePreviewUrl ? (
              <Img alt="" src={loadedProfileImage.imagePreviewUrl} />
            ) : (
              <Img alt="default" src={defaultImg} />
            )}
          </label>
        </CustomImgWrapper>
        <button type="button" onClick={handleRemove}>
          이미지 삭제
        </button>
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
