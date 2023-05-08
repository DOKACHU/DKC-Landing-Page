/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../components';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import { Grid } from '@mui/material';
import { CustomInput, CustomTextArea, AddForm } from '../components';
import styled from 'styled-components';
import defaultImg from './default.png';
import arrow from './arrow.png';

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
  background-color: lightgray;

  &:hover {
    filter: brightness(90%);
  }
`;

const Img = styled.img`
  /* position: relative; */
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: contain;
`;

const Block = styled.div`
  position: relative;
`;

const CustomSelect = styled(Select)`
  .react-select__control {
    border: 1px solid #000;
    border-radius: 8px;
    padding: 3px;
    margin-top: 8px;
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__indicator {
    display: none;

    .react-select__dropdown-indicator {
      /* background-color: #000000; */
    }
  }
  z-index: 9;
`;

const ArrowImg = styled.img`
  position: absolute;
  top: 45%;
  right: 15px;
  z-index: 10;
`;

const PersonalForm = ({
  errors,
  channel,
  setChannel,
  license,
  setLicense,
  career,
  setCareer,
  school,
  setSchool,
  control,
  fileMuitleInput,
  handleFileClick,
  handleUploadFile,
  postImages,
  handleDeleteImage,
  handleRemove,
  loadedProfileImage,
  handleProfileImageChange,
}: any) => {
  const isNumber = [
    'startYear',
    'startMonth',
    'endYear',
    'endMonth',
    'registerYear',
    'registerMonth',
  ];

  const handleAddClick = (e: any) => {
    e.preventDefault();
    const { name } = e.target;

    if (name === 'career') {
      const newObj = {
        startYear: '',
        startMonth: '',
        endYear: '',
        endMonth: '',
        content: '',
      };
      setCareer([...career, newObj]);
    }
    if (name === 'school') {
      const newObj = {
        startYear: '',
        startMonth: '',
        endYear: '',
        endMonth: '',
        content: '',
      };
      setSchool([...school, newObj]);
    }
    if (name === 'license') {
      const newObj = {
        content: '',
      };
      setLicense([...license, newObj]);
    }
    if (name === 'channel') {
      const newObj = {
        content: '',
      };
      setChannel([...channel, newObj]);
    }
  };

  const addForm = [
    {
      id: 0,
      label: '경력',
      type: 'career',
    },
    {
      id: 1,
      label: '학력',
      type: 'school',
    },
    {
      id: 2,
      label: '자격증',
      type: 'license',
    },
    {
      id: 3,
      label: '채널',
      type: 'channel',
    },
  ];

  const handleChange = (e: any, index: number) => {
    const { value, name } = e.target;
    const result = isNumber ? value.replace(/\D/g, '') : value;
    const newList = career;
    career[index][name] = result;
    setCareer([...newList]);
  };

  const handleSchoolChange = (e: any, index: number) => {
    const { value, name } = e.target;
    const result = isNumber ? value.replace(/\D/g, '') : value;
    const newList = school;
    school[index][name] = result;
    setSchool([...newList]);
  };

  const handleLicenseChange = (e: any, index: number) => {
    const { value, name } = e.target;
    const result = isNumber ? value.replace(/\D/g, '') : value;
    const newList = license;
    license[index][name] = result;
    setLicense([...newList]);
  };

  const handleChannelChange = (e: any, index: number) => {
    const { value, name } = e.target;
    const newList = channel;
    channel[index][name] = value;
    setChannel(newList);
  };

  return (
    <>
      {/* 4 */}
      <Grid item xs={12}>
        <Controller
          name="coverImage"
          control={control}
          defaultValue={''}
          render={({ field }) => {
            return (
              <>
                <span>*프로필 이미지 (최대 5개)</span>
                <div>
                  <input
                    {...field}
                    ref={fileMuitleInput}
                    type="file"
                    onChange={handleUploadFile}
                    hidden
                  />
                  <button type="button" onClick={handleFileClick}>
                    파일 업로드
                  </button>
                </div>
              </>
            );
          }}
        />
      </Grid>

      <Grid item xs={12}>
        {postImages.map((url: string, id: number) => {
          return (
            <>
              <img
                style={{
                  width: '140px',
                  height: '140px',
                  objectFit: 'contain',
                  background: 'lightgray',
                  borderRadius: '8px',
                }}
                alt={url}
                key={url}
                src={url}
              />
              <button type="button" onClick={() => handleDeleteImage(id)}>
                x
              </button>
            </>
          );
        })}
        {postImages.length === 0 && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>

      <Grid item xs={6}>
        <Controller
          rules={{ required: true }}
          name="name"
          control={control}
          defaultValue=""
          render={({ field: { onChange, ...rest } }) => {
            const handleChange = (e: any) => {
              const result = e.target.value.replace(/[^ㄱ-ㅎ가-힣a-zA-Z]/gi, '');
              onChange(result);
            };

            return (
              <CustomInput
                {...rest}
                onChange={handleChange}
                label="이름"
                placeholder="이름을 입력해주세요."
                maxLength={15}
              />
            );
          }}
        />
        {errors.name && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>
      <Grid item xs={6}>
        <label>성별*</label>
        <Controller
          name="sex"
          control={control}
          defaultValue={{ value: 'male', label: '남자' }}
          render={({ field }) => (
            <Block>
              <CustomSelect
                {...field}
                className="react-select-container"
                classNamePrefix="react-select"
                defaultValue={{ value: 'male', label: '남자' }}
                options={[
                  { value: 'male', label: '남자' },
                  { value: 'female', label: '여자' },
                ]}
              />
              <ArrowImg src={arrow} alt="" />
            </Block>
          )}
        />
      </Grid>

      {/* 2 */}
      <Grid item xs={6}>
        <label>지역*</label>
        <Controller
          name="location"
          control={control}
          defaultValue={{ value: '02', label: '서울' }}
          render={({ field }) => (
            <Block>
              <CustomSelect
                className="react-select-container"
                classNamePrefix="react-select"
                {...field}
                defaultValue={{ value: '02', label: '서울' }}
                options={[
                  { value: '02', label: '서울' },
                  { value: '032', label: '인천' },
                ]}
              />
              <ArrowImg src={arrow} alt="" />
            </Block>
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <label>담당 업무*</label>
        <Controller
          name="major"
          control={control}
          defaultValue={{ value: '1', label: '도수치료' }}
          render={({ field }) => (
            <Block>
              <CustomSelect
                className="react-select-container"
                classNamePrefix="react-select"
                {...field}
                defaultValue={{ value: '1', label: '도수치료' }}
                options={[
                  { value: '1', label: '도수치료' },
                  { value: '2', label: '카이로프택틱' },
                  { value: '3', label: '추나요법' },
                ]}
              />
              <ArrowImg src={arrow} alt="" />
            </Block>
          )}
        />
      </Grid>

      {/* 5 textarea */}
      <Grid item xs={12}>
        <Controller
          rules={{ required: true }}
          name="info"
          control={control}
          defaultValue=""
          render={({ field: { value, ...rest } }) => (
            <>
              <CustomTextArea
                label="간단 소개글 (3000자 이내)"
                placeholder="간단한 본인 소개를 작성 해주세요."
                maxLength={3000}
                {...rest}
              />
              <div
                style={{
                  textAlign: 'right',
                  width: '100%',
                }}
              >
                <span>{`${value.length} / 3000`}</span>
              </div>
            </>
          )}
        />
        {errors.info && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>

      {/* Add Form */}
      <Grid item xs={6}>
        <Controller
          name="licenceImg"
          control={control}
          render={({ field }) => {
            return (
              <>
                <label>* 자격증 이미지 업로드 </label>
                <div>
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
                  {loadedProfileImage?.imagePreviewUrl && (
                    <button
                      style={{
                        marginBottom: '10px',
                      }}
                      type="button"
                      onClick={handleRemove}
                    >
                      이미지 삭제
                    </button>
                  )}
                </div>
              </>
            );
          }}
        />

        <CustomImgWrapper>
          <label htmlFor="profile-image-input">
            {loadedProfileImage?.imagePreviewUrl ? (
              <>
                <Img alt="" src={loadedProfileImage?.imagePreviewUrl} />
              </>
            ) : (
              <Img alt="default" src={defaultImg} />
            )}
          </label>
        </CustomImgWrapper>
        {loadedProfileImage.imagePreviewUrl === '' && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="addform"
          rules={{ required: true }}
          control={control}
          render={() => {
            return (
              <>
                {addForm?.map((item: any, i: number) => {
                  return (
                    <AddForm
                      errors={errors}
                      key={`${item}-${i}`}
                      {...item}
                      onClick={handleAddClick}
                      career={career}
                      school={school}
                      license={license}
                      channel={channel}
                      onChange={handleChange}
                      onLicenseChange={handleLicenseChange}
                      onChannelChange={handleChannelChange}
                      onSchoolChange={handleSchoolChange}
                    />
                  );
                })}
              </>
            );
          }}
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
