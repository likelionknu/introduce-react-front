import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import SideNav from "../components/SideNav";
import BottomNav from "./BottonNav";
import image from '../img/member.png'
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
  float:right;
  text-align: center;
`;
const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;

`;
const Image = styled.img`
min-width:50%;
min-height:80%;
max-width: 50%;
max-height:80%;
float:left;
margin : 20px;
`;
const Third = () => {
    return (
        <Layout>
          <GlobalStyle />
          <SideNav />
          <Main>
          <h1> LIKELION KNU ORG CHART</h1>
        <hr
                    style={{
                        background: 'black',
                        height: "5px",
                        border: "none",
                        }}/>
            <BottomNav />
            <Image src = {image}/>
            <h2>Design Team</h2>
            <div>
            <hr
            style={{
                background: "#1EA4FF",
                height: "2px",
                border: "none",
                }}/>
                <h2>팀장</h2>
                <p>윤시현<br/>
                </p>
            </div>
          </Main>
        </Layout>
      );
};

export default Third;
