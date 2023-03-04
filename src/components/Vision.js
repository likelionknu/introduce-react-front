import React from "react";
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

const Vision = () => {
  return (
    <Layout>
      <GlobalStyle />
      <SideNav />
      <Main>
        <h2>"강남대 멋사의 비전"</h2>
        <Horlizn></Horlizn>
        <p>
          멋쟁이사자처럼의 비전은 「POSSIBILITY TO REALITY」 <br />
          가능성을 현실로 만들어내는 것입니다.
        </p>
        <p>
          강남대 멋쟁이사자처럼만의 비전은 무엇일까요?
          <br />
          "웹 개발" 이라는 하나의 목표를 가지고 같이 공부하고, <br />
          이를 직접 실현해가며 함께 성장하는 것이 강남대 멋사의 <br />
          목적이자 비전입니다.
        </p>
        <p>
          다들 머릿속으로 상상하던것을 실현하고 싶은 욕구를 가지고 있지
          않으신가요?
          <br />
        </p>
        <p>
          "함께" 라는 키워드는, 시작에 대한 두려움을 덜 수 있습니다.
          <br />
          강남대 멋사에서 같은 목표를 두고 나아가고 있는 <br />
          동료들과 함께 꿈을 실현해보세요!
        </p>
      </Main>
    </Layout>
  );
};

export default Vision;
