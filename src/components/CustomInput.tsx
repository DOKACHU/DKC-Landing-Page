import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

interface CustomInputProps {
  name: string;
  value: string;
  onChange: (...event: any[]) => void;
}

export default function CustomInput({
  value,
  name,
  ...props
}: CustomInputProps) {
  return (
    <Wrapper>
      <span>{name}*</span>
      <input value={value} name={name} {...props} />
    </Wrapper>
  );
}
