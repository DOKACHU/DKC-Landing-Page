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

const Span = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #000;
`;

const Container = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    border: 1px solid #e4e4e4;
  }

  &:focus {
    background-color: #f4f4f4;
  }
`;

export default function AddForm({ id, label, children, type, onClick }: any) {
  //   console.log({ children });

  return (
    <Container>
      <label>{label}</label>
      <CustomDivdier />

      {/*  */}
      <CustomButton type="button" name={type} value={id} onClick={onClick}>
        +추가하기
      </CustomButton>

      {/*  */}
      {children?.map((v: any, i: number) => {
        const is = ['lang', 'channel'].includes(type);
        return (
          <AddSection key={i}>
            {is ? null : <Span>{`${v.startDate} - ${v.endDate}`}</Span>}
            {v.content === '' ? <Input /> : <Span>{v.content}</Span>}
          </AddSection>
        );
      })}
    </Container>
  );
}
