import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import SideNav from "./SideNav";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ffffff;
  }
`;

const Main = styled.main`
  margin: 32px;
  width: 100%;
  min-height: 500px;
  background: #ffffff;
  color: #0f0e17;
  border-radius: 8px;
  text-align: center;
`;

const Horlizn = styled.div`
  color: black;
  background-color: black;
  width: 95%;
  height: 1px;
  border: 1px solid black;
`;
const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  color: #a7a9be;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

const Hyun = () => {
  return (
    <Layout>
      <GlobalStyle />
      <SideNav />
      <Main>
        <h2>제작팀</h2>
        <Horlizn></Horlizn>
        <img src="../img/sh.png" alt="승현" width="250px" />
        <p>천승현</p>
        <Link
          to="https://ripe-launch-04b.notion.site/446aa50a8f9f4d8f866c05ab13ead746"
          target="_blank"
        >
          👉 코딩천재 승현의 자기소개가 궁금하다면?
        </Link>
      </Main>
    </Layout>
  );
};

export default Hyun;
