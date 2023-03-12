import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import img1 from "../img/insta4.png";
import img2 from "../img/facebook.png";
import img3 from "../img/git.png";
import img4 from "../img/notion.png";
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
  text-align: center;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  color: #a7a9be;
  font-size: 1.5rem;
  font-family: sans-serif;
`;
const ImgStyle = styled.img`
  display: flex;
  min-width: 40%;
  min-height: 50%;
  max-width: 40%;
  max-height: 50%;
  margin: 30px;
  float: left;
`;
const Sns = () => {
  return (
    <Layout>
      <GlobalStyle />
      <SideNav3 />
      <Main>
        <h1> LIKELION KNU ADDRESS </h1>
        <hr
          style={{
            background: "black",
            height: "5px",
            border: "none",
          }}
        />
        <div>
          <ImgStyle src={img1} />
          <ImgStyle src={img2} />
        </div>
        <h4>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          LIKELION KNU 소개, 조직도, 공지사항 등은 페이스북과 인스타그램을{" "}
          <br />
          통해 관리하고 있습니다.
          <br />
          <br />
          바로가기 ↓<br />
          페이스북 ▷
          <Link to="https://www.facebook.com/likelionKangnam" target="_blank">
            FACEBOOK
          </Link>
          <br />
          인스타그램 ▷
          <Link to="https://www.instagram.com/likelion.knu/" target="_blank">
            INSTAGRAM
          </Link>
        </h4>
        <hr
          style={{
            background: "black",
            height: "1px",
            border: "none",
          }}
        />
        <div>
          <ImgStyle src={img3} />
          <ImgStyle src={img4} />
        </div>
        <h4>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          각 파트별 세션 정리, 관련 코드 , 프로젝트 진행 상황 등은 notion과
          <br />
          GitHub 을 통해 관리하고 있습니다.
          <br />
          <br />
          바로가기 ↓<br />
          노션 ▷
          <Link
            to="https://www.notion.so/eb8ccb8683854eb3a68384ca2e82439b"
            target="_blank"
          >
            NOTION
          </Link>
          <br />
          깃허브 ▷
          <Link to="https://github.com/likelionknu" target="_blank">
            GitHub
          </Link>
        </h4>
      </Main>
    </Layout>
  );
};

export default Sns;
