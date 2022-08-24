import React from 'react';
import styled, { css } from 'styled-components';

const CustomButton = styled.button<ButtonProps>`
  padding: 17px 142px;
  color: #fff;
  background-color: #000;
  border: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;

  ${props =>
    props.btnType &&
    css`
      background-color: #fff;
      border: 1px solid #000;
      color: #000;
    `};

  &:hover {
    background-color: #e4e4e4;
  }

  &:disabled {
    background-color: lightgray;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  label?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  btnType?: string;
  disabled?: boolean;
}

export default function Button({ type, btnType, children, ...restProps }: ButtonProps) {
  return (
    <CustomButton btnType={btnType} {...restProps} type={type}>
      {children}
    </CustomButton>
  );
}
