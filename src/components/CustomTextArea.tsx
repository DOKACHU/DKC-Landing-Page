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
  value?: string;
  placeholder?: string;
  onChange: (...event: any[]) => void;
  maxLength?: number;
  readOnly?: boolean;
}

export default function CustomTextArea({
  value,
  label,
  placeholder,
  maxLength,
  readOnly,
  ...props
}: CustomTextAreaProps) {
  return (
    <Wrapper>
      <Span>{label}*</Span>
      <TextArea
        readOnly={readOnly}
        placeholder={placeholder}
        rows={8}
        value={value}
        maxLength={maxLength}
        {...props}
      />
    </Wrapper>
  );
}
