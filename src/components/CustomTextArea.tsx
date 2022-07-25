import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

interface CustomTextAreaProps {
  name: string;
  value: string;
  onChange: (...event: any[]) => void;
}

export default function CustomTextArea({
  value,
  name,
  ...props
}: CustomTextAreaProps) {
  return (
    <Wrapper>
      <span>{name}*</span>
      <textarea value={value} name={name} {...props} readOnly />
    </Wrapper>
  );
}
