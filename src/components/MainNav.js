import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const CategorisBlock = styled.div`
  display: flex;
  padding: 1rem;
`;
const Category = styled.div`
  cursor: pointer;
  padding-right: 1rem;

  &:hover {
    color: #4f85eb;
  }
`;
const MainNav = () => {
  return (
    <>
      <CategorisBlock>
        <Category>KANGNAM LIKELION</Category>
        <Category>소개</Category>
        <Category>트랙</Category>
        <Category>홍보</Category>
        <Category>어플라이</Category>
      </CategorisBlock>
      <Outlet />
    </>
  );
};

export default MainNav;
