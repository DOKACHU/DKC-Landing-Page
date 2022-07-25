/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";
import styled from "styled-components";
import { TextSection } from "../components";

const Block = styled.div`
  padding: 80px;
  height: 100vh;
`;

interface FormTemplate {
  children: React.ReactNode;
  toggle?: boolean;
}

export default function FormTemplate({ toggle, children }: FormTemplate) {
  return (
    <Block>
      <TextSection toggle={toggle} />
      {children}

      {/* TODO: Footer 고정  */}
      {/* <div>
        <input type="submit" />
      </div> */}
    </Block>
  );
}
