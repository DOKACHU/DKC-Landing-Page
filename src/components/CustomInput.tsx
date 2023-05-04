/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components';
import { FormGroup, Chip, Stack } from '@mui/material';

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

const Input = styled.input<{ isTag?: boolean }>`
  padding: 12px 16px;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;

  ${props =>
    props?.isTag &&
    css`
      border-radius: 8px 0 0 8px;
    `};

  &:hover {
    border: 1px solid #e4e4e4;
  }

  &:focus {
    background-color: #f4f4f4;
  }
`;

const Button = styled.button`
  width: 10%;
  border-radius: 0 8px 8px 0;
  border: 1px solid #000000;
  background: #fff;
  border-left: none;

  &:hover {
    border: 1px solid #e4e4e4;
  }
`;

interface CustomInputProps {
  ref?: any;
  label?: string;
  value: string | number;
  onChange: () => void;
  onClick?: () => void;
  type?: string;
  placeholder?: string;
  tagsRef?: any;
  handleClick?: () => void;
  tags?: any;
  pattern?: any;
  title?: string;
  maxLength?: number;
}

export default function CustomInput({
  type,
  value,
  ref,
  onClick,
  label,
  placeholder,
  tagsRef,
  handleClick,
  tags,
  pattern,
  title,
  maxLength,
  ...props
}: CustomInputProps) {
  // const { tagsRef, handleClick, tags } = useRegisterCenter();

  return (
    <Wrapper>
      <Span>{label}*</Span>

      {type === 'tags' ? (
        <FormGroup row>
          <Input
            isTag
            style={{
              width: '90%',
            }}
            value={value}
            ref={tagsRef}
            placeholder={placeholder}
            {...props}
          />
          <Button type="button" onClick={handleClick}>
            추가
          </Button>
          <Stack
            style={{
              marginTop: '10px',
            }}
            direction={'row'}
            spacing={1}
          >
            {tags.map((tagLabel: string, i: any) => {
              return <Chip label={tagLabel} key={i} />;
            })}
          </Stack>
        </FormGroup>
      ) : (
        <Input
          ref={ref}
          value={value}
          onClick={onClick}
          {...props}
          placeholder={placeholder}
          pattern={pattern}
          title={title}
          maxLength={maxLength}
        />
      )}
    </Wrapper>
  );
}
