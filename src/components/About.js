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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const About = () => {
  return (
    <Layout>
      <GlobalStyle />
      <SideNav />
      <Main>
        <h2>"멋쟁이사자처럼은 무슨 동아리일까?"</h2>
        <Horlizn></Horlizn>
        <p>
          멋쟁이사자처럼 대학은 테크 기반의 아이디어 실현을 위한 <br />
          전국 최대 규모의 대학 연합 창업 동아리입니다.
        </p>
        <p>
          멋쟁이사자처럼에서 제공되는 온라인 기반의 강의 & <br />
          대학내 운영진의 세션과 트랙별 스터디로 코딩을 배우고, <br />
          해커톤과 같은 오프라인 활동으로 자신의 아이디어를 <br />
          실현해 보세요!
        </p>
        <p>
          "내 아이디어를 내 손으로 실현하다, HACK YOUR LIFE!" <br />
          👉LIKE LION UNIV X KNU👈
        </p>
        <img
          src="./img/msimg.png"
          alt="멋사 단체사진"
          width="300px"
          height="200px"
        />
        <p>
          멋쟁이사자처럼에 대해서 자세히 알고싶다면 ? <br />
          <Link
            to="https://ripe-launch-04b.notion.site/88de609dd84e4fcab616b1cf2cf491e2"
            target="_blank"
          >
            👉 강남대 멋사 노션 보러가기
          </Link>
        </p>
      </Main>
    </Layout>
  );
};

export default About;
