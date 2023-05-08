/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import { Grid, Checkbox, Modal, Box } from '@mui/material';
import { CustomInput, CustomTextArea } from '../components';
import styled from 'styled-components';
import { Button } from '../components';
import DaumPostcode from 'react-daum-postcode';
import arrow from './arrow.png';
import defaultImg from './default.png';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// interface HospitalFormProps {
//   control: any;
//   loadedBusinessImage: any;
//   handleBusinessImageChange: (e: any) => void;
//   handleRemove: () => void;
// }
const CustomImgWrapper = styled.div`
  border: 1px solid #f4f4f4;
  border-radius: 16px;
  width: 140px;
  height: 140px;
  background-color: lightgray;
  &:hover {
    filter: brightness(90%);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: contain;
`;

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

const CenterForm = ({
  errors,
  tagsRef,
  handleClick,
  tags,
  fileMuitleInput,
  handleUploadFile,
  postImages,
  handleFileClick,
  handleDeleteImage,
  control,
  loadedBusinessImage,
  handleBusinessImageChange,
  handleRemove,
  openPostcode,
  handle,
  inputRef,
  setOpenPostcode,
  address,
}: any) => {
  console.log({ errors });
  return (
    <>
      <Grid item xs={12}>
        <Grid item xs={2}>
          <Controller
            // rules={{ required: true }}
            name="coverImage"
            control={control}
            render={({ field }) => {
              return (
                <>
                  <span>커버 이미지 *</span>
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

        <Grid item xs={10}>
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
          {/* {errors.coverImage && postImages.length === 0 && (
            <span style={{ color: 'red' }} role="alert">
              * 필수 항목입니다.
            </span>
          )} */}
          {postImages.length === 0 && (
            <span style={{ color: 'red' }} role="alert">
              * 필수 항목입니다.
            </span>
          )}
        </Grid>
      </Grid>

      {/* 이름 */}
      <Grid item xs={6}>
        <Controller
          rules={{ required: true }}
          name="centerName"
          control={control}
          defaultValue=""
          render={({ field: { onChange, ...rest } }) => {
            const handleChange = (e: any) => {
              // 한글 & 영어만
              const result = e.target.value.replace(/[^ㄱ-ㅎ가-힣a-zA-Z]/gi, '');
              onChange(result);
            };

            return (
              <CustomInput
                {...rest}
                onChange={handleChange}
                label="병원 이름"
                maxLength={15}
                placeholder="병원 이름을 적어주세요."
              />
            );
          }}
        />
        {errors.centerName && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>

      <Grid item xs={6}>
        <label>지역*</label>
        <Controller
          rules={{ required: true }}
          name="location"
          control={control}
          defaultValue={{ value: '00', label: '서울' }}
          render={({ field }) => (
            <Block>
              <CustomSelect
                {...field}
                className="react-select-container"
                classNamePrefix="react-select"
                defaultValue={{ value: '00', label: '서울' }}
                options={[
                  { value: '00', label: '서울' },
                  { value: '01', label: '인천' },
                  { value: '02', label: '대구' },
                  { value: '03', label: '부산' },
                  { value: '04', label: '광주' },
                ]}
              />
              <ArrowImg src={arrow} alt="" />
            </Block>
          )}
        />
        {errors.location && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>

      {/* 3 대표주소 */}
      <Grid item xs={6}>
        <Controller
          // rules={{ required: true }}
          name="address"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <CustomInput
              {...field}
              value={address}
              placeholder="대표 주소 입력"
              label="대표주소"
              ref={inputRef}
              onClick={() => {
                handle.clickButton();
              }}
            />
          )}
        />
        <Modal open={openPostcode} onClose={() => setOpenPostcode(false)}>
          <Box sx={style}>
            <DaumPostcode
              onComplete={handle.selectAddress}
              autoClose={false}
              defaultQuery="" //  판교역로 235
            />
          </Box>
        </Modal>
        {address === '' && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>

      <Grid item xs={6}>
        <Controller
          rules={{ required: true }}
          name="detailAddress"
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <CustomInput
              {...field}
              placeholder="나머지 상세 주소를 입력해주세요."
              label="상세주소"
            />
          )}
        />
        {errors.detailAddress && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>

      {/* 4 사업자 등록번호 */}
      <Grid item xs={6}>
        <Controller
          rules={{ required: true }}
          name="bizzNumber"
          control={control}
          defaultValue={''}
          render={({ field: { onChange, ...rest } }) => {
            const handleChange = (e: any) => {
              // 숫자만
              const result = e.target.value.replace(/\D/g, '');
              onChange(result);
            };

            return (
              <CustomInput
                {...rest}
                onChange={handleChange}
                label="사업자 등록번호"
                placeholder="‘-’ 제외 10자리"
                maxLength={10}
              />
            );
          }}
        />
        {errors.bizzNumber && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>

      <Grid item xs={6}>
        <label>진료항목*</label>
        <Controller
          rules={{ required: true }}
          name="subject"
          control={control}
          defaultValue={{ value: '00', label: '도수 치료' }}
          render={({ field }) => (
            <Block>
              <CustomSelect
                {...field}
                className="react-select-container"
                classNamePrefix="react-select"
                defaultValue={{ value: '00', label: '도수 치료' }}
                options={[
                  { value: '00', label: '도수 치료' },
                  { value: '01', label: '카이로 프택틱' },
                  { value: '02', label: '추나요법' },
                ]}
              />
              <ArrowImg src={arrow} alt="" />
            </Block>
          )}
        />
        {errors.subject && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>

      {/* 치료사 수 */}
      <Grid item xs={6}>
        <Controller
          rules={{ required: true }}
          name="proCount"
          control={control}
          render={({ field: { onChange, ...rest } }) => {
            const handleChange = (e: any) => {
              const result = e.target.value.replace(/\D/g, '');
              onChange(result);
            };

            return (
              <CustomInput
                {...rest}
                onChange={handleChange}
                label="치료사 수"
                placeholder="직접 입력"
                maxLength={4}
              />
            );
          }}
        />
        {errors.proCount && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>
      <Grid item xs={6}>
        <Controller
          // rules={{ required: true }}
          name="profileImg"
          control={control}
          render={({ field }) => {
            return (
              <label>
                사업자 이미지 등록
                <input
                  {...field}
                  accept="image/*"
                  id="profile-image-input" // label htmlFor
                  type="file" // type="file"  object-fit: cover;
                  hidden // input을 숨기고 다른 스타일링위해
                  onChange={e => {
                    handleBusinessImageChange(e);
                  }}
                />
              </label>
            );
          }}
        />
        <CustomImgWrapper>
          <label htmlFor="profile-image-input">
            {loadedBusinessImage.imagePreviewUrl ? (
              <Img alt="" src={loadedBusinessImage.imagePreviewUrl} />
            ) : (
              <Img alt="default" src={defaultImg} />
            )}
          </label>
        </CustomImgWrapper>
        {loadedBusinessImage.imagePreviewUrl && (
          <button type="button" onClick={handleRemove}>
            이미지 삭제
          </button>
        )}
        {loadedBusinessImage.imagePreviewUrl === '' && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>

      {/* </Grid> */}

      {/* 5 textarea */}
      <Grid item xs={12}>
        <Controller
          rules={{ required: true }}
          name="desc"
          control={control}
          defaultValue=""
          render={({ field: { value, ...rest } }) => (
            <>
              <CustomTextArea
                {...rest}
                label="병원 소개(3000자 제한)"
                placeholder="병원 소개를 적어주세요."
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
        {errors.desc && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>

      {/* 6 담당자 연락처 */}
      <Grid item xs={6}>
        <Controller
          rules={{ required: true }}
          name="phoneNumber"
          control={control}
          defaultValue=""
          render={({ field: { onChange, ...rest } }) => {
            const handleChange = (e: any) => {
              // 숫자만
              const result = e.target.value.replace(/\D/g, '');
              onChange(result);
            };

            return (
              <CustomInput
                {...rest}
                onChange={handleChange}
                label="담당자 연락처"
                placeholder="010-0000-0000"
                maxLength={14}
              />
            );
          }}
        />
        {errors.phoneNumber && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>
      <Grid item xs={6}>
        <Controller
          rules={{ required: true }}
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <CustomInput {...field} label="정보 수신 이메일" placeholder="ex) user@gmail.com" />
          )}
        />
        {errors.email && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>

      {/*TODO: auto complete */}
      <Grid item xs={12}>
        <Controller
          rules={{ required: true }}
          name="tags"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <CustomInput
              {...field}
              type="tags"
              tagsRef={tagsRef}
              handleClick={handleClick}
              tags={tags}
              placeholder="텍스트만 입력 가능합니다."
              label="병원 검색 키워드 (키워드는 최대 3개가지 입력 가능합니다.)"
            />
          )}
        />
        {errors.tags && (
          <span style={{ color: 'red' }} role="alert">
            * 필수 항목입니다.
          </span>
        )}
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          marginBottom: '20px',
        }}
      >
        <Controller
          name="policy"
          control={control}
          defaultValue=""
          render={({ field }) => <CustomTextArea {...field} label="이용약관" readOnly />}
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
        <Button type="submit">제출하기</Button>
      </Footer>
    </>
  );
};

export default CenterForm;
