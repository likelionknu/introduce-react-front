import React from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
const CategorisBlock = styled.div`
  display: flex;
  padding: 1rem;
`;
const Category = styled(Link)`
  display: flex;
  cursor: pointer;
  padding-right: 1rem;
  color: black;
  text-decoration: none;
  &:hover {
    color: #4f85eb;
  }
`;
const RightArrow = styled(BsArrowRightCircle)`
  padding-top: 3px;
`;
const MainNav = () => {
  return (
    <>
      <CategorisBlock>
        <Category to="/">LIKELION KNU</Category>
        <Category to="/intro">소개</Category>
        <Category to="/track">트랙</Category>
        <Category to="promote">홍보</Category>
        <Category to="https://knu-likelion.org/" target="_blank">
          어플라이
          <div>
            <RightArrow />
          </div>
        </Category>
      </CategorisBlock>
      <Outlet />
    </>
  );
};

export default MainNav;
