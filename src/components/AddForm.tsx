import React from 'react';
import styled from 'styled-components';

const AddSection = styled.div`
  border-top: 0.5px solid rgba(0, 0, 0, 0.15);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  padding: 26px 0;
  display: flex;
  justify-content: flex-start;
  gap: 64px;
`;

const CustomDivdier = styled.div`
  border: 0.5px solid #000;
  margin-top: 8px;
`;

const CustomButton = styled.button`
  margin: 24px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Span = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #000;
`;

export default function AddForm() {
  return (
    <>
      <label>경력*</label>
      <CustomDivdier />
      <CustomButton type="button">+추가하기 </CustomButton>
      <AddSection>
        <Span>YYYY. MM. - YYYY. MM</Span>
        <Span>병원명</Span>
      </AddSection>
    </>
  );
}
