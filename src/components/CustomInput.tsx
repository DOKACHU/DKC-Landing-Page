/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

const Wrapper = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
`;
const Span = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
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

interface CustomInputProps {
  label?: string;
  value: string | number;
  onChange: (...event: any[]) => void;
}

export default function CustomInput({ value, label, ...props }: CustomInputProps) {
  return (
    <Wrapper>
      <Span>{label}*</Span>
      <Input value={value} {...props} />
    </Wrapper>
  );
}
