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
`;

interface CustomInputProps {
  name: string;
  value: string | number;
  onChange: (...event: any[]) => void;
}

export default function CustomInput({ value, name, ...props }: CustomInputProps) {
  return (
    <Wrapper>
      <Span>{name}*</Span>
      <Input value={value} name={name} {...props} />
    </Wrapper>
  );
}
