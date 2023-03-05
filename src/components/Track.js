import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Content from "./Content";
import SideNav2 from "./SideNav2";

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

const Track = () => {
  return (
    <Layout>
      <GlobalStyle />
      <SideNav2 />
      <Content />
    </Layout>
  );
};

export default Track;
