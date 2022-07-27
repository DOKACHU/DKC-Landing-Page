/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  resize: none;

  &:hover {
    border: 1px solid #e4e4e4;
  }

  &:focus {
    background-color: #f4f4f4;
  }
`;

interface CustomTextAreaProps {
  label?: string;
  value: string;
  onChange: (...event: any[]) => void;
}

export default function CustomTextArea({ value, label, ...props }: CustomTextAreaProps) {
  return (
    <Wrapper>
      <Span>{label}*</Span>
      <TextArea value={value} {...props} />
    </Wrapper>
  );
}
