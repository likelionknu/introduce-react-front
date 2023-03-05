import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import SideNav from "./SideNav";
<<<<<<< HEAD
import Content from "./Content";
=======
>>>>>>> dd869733c6e49784a358483a0488dd1351983ffa

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ffffff;
  }
`;
<<<<<<< HEAD
=======
const Main = styled.main`
  margin: 32px;
  width: 100%;
  min-height: 500px;
  background: #ffffff;
  color: #4f85eb;
  border-radius: 8px;
  text-align: center;
`;
>>>>>>> dd869733c6e49784a358483a0488dd1351983ffa

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  color: #a7a9be;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

const Intro = () => {
  return (
    <Layout>
      <GlobalStyle />
      <SideNav />
<<<<<<< HEAD
      <Content />
=======
      <Main>
        <h1>INTRO</h1>
      </Main>
>>>>>>> dd869733c6e49784a358483a0488dd1351983ffa
    </Layout>
  );
};

export default Intro;
