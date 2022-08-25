/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { FormGroup } from '@mui/material';
import { useRegisterCenter } from '../hooks';

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

const Button = styled.button`
  width: 10%;
`;

interface CustomInputProps {
  ref?: any;
  label?: string;
  value: string | number;
  onChange: (...event: any[]) => void;
  onClick?: () => void;
  type?: string;
}

export default function CustomInput({
  type,
  value,
  ref,
  onClick,
  label,
  ...props
}: CustomInputProps) {
  const { tagsRef, handleClick, tags } = useRegisterCenter();

  return (
    <Wrapper>
      <Span>{label}*</Span>

      {type === 'tags' ? (
        <FormGroup row>
          <Input
            style={{
              width: '90%',
            }}
            value={value}
            ref={tagsRef}
            {...props}
          />
          <Button type="button" onClick={handleClick}>
            추가
          </Button>
          {tags.map((v: any, i: any) => {
            return (
              <div
                style={{
                  border: '1px solid red',
                }}
                key={i}
              >
                {v}
              </div>
            );
          })}
        </FormGroup>
      ) : (
        <Input ref={ref} value={value} onClick={onClick} {...props} />
      )}
    </Wrapper>
  );
}
