import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Content from "./Content";
import SideNav3 from "./SideNav3";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ffffff;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  color: #a7a9be;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

const Sns = () => {
  return (
    <Layout>
      <GlobalStyle />
      <SideNav3 />
      <Content />
    </Layout>
  );
};

export default Sns;
