import styled, { createGlobalStyle } from "styled-components";
import SideNav from "./SideNav";
import React, { useState } from "react";
import '../group/BottonNav'
import '../group/FontAwe'
import image from '../img/member.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
min-width:80%;
min-height:80%;
max-width: 80%;
max-height:80%;
margin : 20px;
`;
const Sns = () => {
    const [activeNav, setActiveNav] = useState(1);
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
        <nav className="wrapper">
        <div>
            <Link to="/first" className="nav-link" onClick = {() => setActiveNav(1)}>
            <FontAwesomeIcon icon="people-group" className = {activeNav === 1? "nav-item active ": "nav-item"} /> 
            </Link>
        </div>
        <div>
            <Link to="/second" className="nav-link" onClick = {() => setActiveNav(2)}>
            <FontAwesomeIcon icon="tower-cell" className = {activeNav === 2? "nav-item active ": "nav-item"}/>
            </Link>
        </div>
        <div>
            <Link to="/third" className="nav-link" onClick = {() => setActiveNav(3)}>
            <FontAwesomeIcon icon="paintbrush" className = {activeNav === 3? "nav-item active ": "nav-item"}/>
        </Link>
      </div>
      <div>
        <Link to="/fourth" className="nav-link" onClick = {() => setActiveNav(4)}>
          <FontAwesomeIcon icon="desktop" className = {activeNav === 4? "nav-item active ": "nav-item"}/>
        </Link>
      </div>
    </nav>
    <Image src = {image}/>
      </Main>
    </Layout>
  );
};
export default Sns;
