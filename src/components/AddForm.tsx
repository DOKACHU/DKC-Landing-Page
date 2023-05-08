/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

const AddSection = styled.div`
  border-top: 0.5px solid rgba(0, 0, 0, 0.15);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  padding: 26px 0;
  display: flex;
  justify-content: flex-start;
  gap: 64px;
`;

const CustomDivdier = styled.div`
  border: 0.5px solid #000;
  margin-top: 8px;
`;

const CustomButton = styled.button`
  margin: 24px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

// const Span = styled.span`
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 21px;
//   color: #000;
// `;

const Container = styled.div`
  margin-bottom: 20px;
`;

const YearInput = styled.input`
  border: none;
  width: 40px;
  &:focus {
    outline: none;
  }
`;

const MonthInput = styled.input`
  border: none;
  width: 30px;
  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  border: none;
  /* width: 300px; */
  /* width: 30px; */
  &:focus {
    outline: none;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default function AddForm({
  onChange,
  id,
  label,
  career,
  type,
  onClick,
  school,
  license,
  channel,
  onLicenseChange,
  onSchoolChange,
  onChannelChange,
}: // errors,
any) {
  const textMap: any = {
    career: career,
    school: school,
    license: license,
    channel: channel,
  };

  const placeholderMap: any = {
    career: '병원명',
    school: '학력',
    license: '자격증',
    channel: 'ex) https://www.youtube.com/watch?v=test',
  };

  return (
    <Container>
      <label>
        {type !== 'channel' && '*'} {label}
      </label>
      <CustomDivdier />

      {/*  */}
      <CustomButton type="button" name={type} value={id} onClick={onClick}>
        +추가하기
      </CustomButton>

      {/*  */}
      {textMap[type]?.map((v: any, i: number) => {
        const isChannel = ['license', 'channel'].includes(type);

        return (
          <>
            <AddSection key={i}>
              {isChannel ? null : (
                <>
                  <Row>
                    <YearInput
                      placeholder="YYYY"
                      value={type === 'career' ? career[i].startYear : school[i].startYear}
                      type="text"
                      maxLength={4}
                      name="startYear"
                      onChange={e => (type === 'career' ? onChange(e, i) : onSchoolChange(e, i))}
                    />
                    <span>.</span>
                    <MonthInput
                      value={type === 'career' ? career[i].startMonth : school[i].startMonth}
                      placeholder="MM"
                      type="text"
                      maxLength={2}
                      name="startMonth"
                      onChange={e => (type === 'career' ? onChange(e, i) : onSchoolChange(e, i))}
                    />
                  </Row>
                </>
              )}

              {isChannel ? null : (
                <>
                  <Row>
                    <YearInput
                      value={type === 'career' ? career[i].endYear : school[i].endYear}
                      placeholder="YYYY"
                      name="endYear"
                      type="text"
                      maxLength={4}
                      onChange={e => (type === 'career' ? onChange(e, i) : onSchoolChange(e, i))}
                    />
                    <span>.</span>
                    <MonthInput
                      value={type === 'career' ? career[i].endMonth : school[i].endMonth}
                      placeholder="MM"
                      type="text"
                      name="endMonth"
                      maxLength={2}
                      onChange={e => (type === 'career' ? onChange(e, i) : onSchoolChange(e, i))}
                    />
                  </Row>
                </>
              )}

              {isChannel ? null : (
                <>
                  <Input
                    placeholder={placeholderMap[type]}
                    maxLength={30}
                    name="content"
                    onChange={e => (type === 'career' ? onChange(e, i) : onSchoolChange(e, i))}
                  />
                </>
              )}

              {type === 'license' && (
                <div>
                  <Input
                    // value={license[i].licenseName}
                    placeholder={'자격증 이름'}
                    name="licenseName"
                    maxLength={10}
                    onChange={e => onLicenseChange(e, i)}
                  />
                  <Input
                    // value={license[i].licenseNumber}
                    placeholder={'자격증 번호'}
                    name="licenseNumber"
                    maxLength={10}
                    onChange={e => onLicenseChange(e, i)}
                  />
                  <YearInput
                    placeholder="YYYY"
                    value={license[i].registerYear}
                    name="registerYear"
                    type="text"
                    maxLength={4}
                    onChange={e => onLicenseChange(e, i)}
                  />
                  <span>.</span>
                  <MonthInput
                    value={license[i].registerMonth}
                    placeholder="MM"
                    type="text"
                    name="registerMonth"
                    maxLength={2}
                    onChange={e => onLicenseChange(e, i)}
                  />
                  {/* <MonthInput
                  placeholder="DD"
                  type="text"
                  name="registerDay"
                  maxLength={2}
                  onChange={e => onLicenseChange(e, i)}
                /> */}
                </div>
              )}

              {type === 'channel' && (
                <>
                  <Input
                    style={{
                      width: '300px',
                    }}
                    placeholder={placeholderMap[type]}
                    maxLength={30}
                    name="content"
                    onChange={e => onChannelChange(e, i)}
                  />
                </>
              )}
            </AddSection>
            {/* {errors.addform && type !== 'channel' && (
              <span style={{ color: 'red' }} role="alert">
                * 필수 항목입니다.
              </span>
            )} */}
          </>
        );
      })}
    </Container>
  );
}
