import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import Content from "./Content";
import SideNav3 from "./SideNav3";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ffffff;
  }
`;
const Main = styled.main`
  color: #0f0e17;
  font-size: medium;
  font-family: "font";
  float: right;
  text-align: center;
`;
const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
`;
// const Image = styled.img`
//   min-width: 95%;
//   min-height: 35%;
//   max-width: 95%;
//   max-height: 35%;
//   margin: 15px;
// `;
const ImgStyle = styled.img`
  min-width: 25%;
  min-height: 50%;
  max-width: 25%;
  max-height: 50%;
  margin: 5px;
  float: left;
`;
<Layout>
  <GlobalStyle />
  <SideNav3 />
  <Content />
</Layout>;
const Promote = ({ children }) => {
  return (
    <Layout>
      <GlobalStyle />
      <SideNav3 />
      <Main>
        <h1>LIKELION KNU WEB-SITE </h1>
        <hr
          style={{
            background: "black",
            height: "5px",
            border: "none",
          }}
        />
        <div>
          <ImgStyle src="../img/facebook.png" />
          <ImgStyle src="../img/git.png" />
        </div>
        <br />
        <br />
        <h1>
          내일의 세상을 만드는 <br />
          LIKELION 서비스
        </h1>
        <br />
        <br />
        <div>
          <ImgStyle src="../img/insta4.png" />
          <ImgStyle src="../img/notion.png" />
        </div>
        <h4>
          <br />
          현재 강남대학교 멋쟁이 사자처럼은 FaceBook, instagram, <br />
          notion, github 등 다양한 사이트들은 운영하고 있습니다.
          <br />
          <h4>
            강남대 학교 멋쟁이 사자처럼 소개, 운영진 조직도, 공지사항 <br />
            등과 더불어 다양한 활동 등을 올리며 각 파트별 세션 진행 등<br />
            정리하여 기록하고 있으니 관심이 있으신 분들은 한 번 <br />
            들려주셨으면 좋겠습니다!
            <br />
            <br />
            <br />
          </h4>
        </h4>
      </Main>
    </Layout>
  );
};

export default Promote;
