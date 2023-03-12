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
  color: #0f0e17;
  font-size: medium;
  font-family: "font";
  float:right;
  `;
  const Main = styled.main`
  color: #0f0e17;
  font-size: medium;
  font-family: "font";
  text-align: center;
`;
const Back = styled.div`
    padding-bottom: 10%;
    column-count: 4;
`;

const Items = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1em; 
    cursor: pointer;
`;

const Fig = styled.div`
    display: inline-block;
    filter: grayscale(0.8);

    &:hover { 
        filter: none;
    }
`;

const Image = styled.img`
    width: 100%;
`;
    
const Story = () => {
  const sample = [
    require('../img/19.png'),
    require('../img/26.png'),
    require('../img/7.png'),
    require('../img/8.png'),
    require('../img/9.png'),
    require('../img/10.png'),
    require('../img/11.png'),
    require('../img/14.png'),
    require('../img/21.png'),
    require('../img/12.png'),
    require('../img/13.png'),
    require('../img/14.png'),
    require('../img/22.png'),
    require('../img/15.png'),
    require('../img/16.png'),
    require('../img/17.png'),
    require('../img/23.png'),
    require('../img/18.png'),
    require('../img/25.png'),
    require('../img/19.png'),
    require('../img/24.png'),
    require('../img/20.png'),
    require('../img/27.png'),
];
  return (
    <Layout>
      <GlobalStyle />
      <SideNav3 />
              <div>
                <Main>
                  <h1> LIKELION KNU ALBUM</h1>
                </Main>
                  <hr
                    style={{
                        background: 'black',
                        height: "5px",
                        border: "none",
                        }}/>
            <Back>
            {sample.map((v, i) => {
                return (
                    <Items key={i}>
                        <Fig>
                            <Image src={v} />
                        </Fig>
                    </Items>
                )
            })}
        </Back>
        <br></br>
        </div>
    </Layout>
  );
};

export default Story;
