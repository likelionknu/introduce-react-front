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

const Eun = () => {
  return (
    <Layout>
      <GlobalStyle />
      <SideNav />
      <Main>
        <h2>제작팀</h2>
        <Horlizn></Horlizn>
        <img src="../img/ch.png" alt="채은" width="250px" />
        <p>배채은</p>
        <Link
          to="https://ripe-launch-04b.notion.site/3463103e0809490eadfeb060118f01bd"
          target="_blank"
        >
          👉 노력걸 채은의 자기소개가 궁금하다면?
        </Link>
      </Main>
    </Layout>
  );
};

export default Eun;
