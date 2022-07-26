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
`;

interface CustomTextAreaProps {
  name: string;
  value: string;
  onChange: (...event: any[]) => void;
}

export default function CustomTextArea({ value, name, ...props }: CustomTextAreaProps) {
  return (
    <Wrapper>
      <Span>{name}*</Span>
      <TextArea value={value} name={name} {...props} />
    </Wrapper>
  );
}
