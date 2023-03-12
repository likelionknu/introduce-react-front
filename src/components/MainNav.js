import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { TbAlignCenter } from "react-icons/tb";

//keyframes
const menuOpenFrames = keyframes`
 0% {
      height: 0px;
    }
    50% {
      height: 4vw;
    }
    100% {
      height: 7.5vw;
    }
`;
const menuCloseFrames = keyframes`
0% {
      height: 100px;
    }
    50% {
      height: 50px;
    }
    100% {
      height: 0px;
    }
`;

const CategorisBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 2rem;
  font-size: 1.5vw;
`;
const Category = styled(Link)`
  display: flex;
  cursor: pointer;
  color: black;
  margin-right: 3rem;
  margin-left: 3rem;
  text-decoration: none;
  &:hover {
    color: #4f85eb;
  }
`;
const RightArrow = styled(BsArrowUpRightCircleFill)`
  margin-left: 10px;
  color: lightgray;
  width: 1.2vw;
  height: 2vw;
`;
const MainImg = styled.img`
  width: 70px;
  height: 50px;
`;
const MenuIcon = styled(TbAlignCenter)`
  height: 2vw;
  color: #4f85eb;
  width: 6vw;
`;

// 드롭메뉴 (전체큰창)
const Menu = styled.div`
  position: absolute;
  z-index: 5;
  top: 75px;
  left: 30%;
  width: 50%;
  background: rgba(79, 133, 235, 0.5);
  &.open {
    animation: ${menuOpenFrames} 0.3s linear forwards;
  }

  &.close {
    animation: ${menuCloseFrames} 0.3s linear forwards;
  }
`;
const MenuList = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  margin-top: 5px;
  margin-left: 53px;
  margin-right: 3.5px;
  list-style: none;
  text-decoration: none;
  color: black;
`;
const MenuItem = styled(Link)`
  font-size: 1vw;
  margin-top: 4px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const MainNav = () => {
  const [isMenu, setisMenu] = useState(false);
  const onClick = () => {
    if (isMenu) setisMenu(false);
    else setisMenu(true);
  };
  return (
    <>
      <CategorisBlock>
        <Category to="/">
          <MainImg src="../img/knu.png" alt="강남대멋사"></MainImg>
          LIKELION KNU
        </Category>
        <Category to="/intro">소개</Category>
        <Category to="/track">트랙</Category>
        <Category to="promote">홍보</Category>
        <Category to="https://knu-likelion.org/" target="_blank">
          어플라이
          <RightArrow />
        </Category>
        <Category>
          <MenuIcon onClick={onClick} />
        </Category>
      </CategorisBlock>
      {isMenu && (
        <Menu className={isMenu ? "open" : "close"}>
          <MenuList>
            <MenuItem to="/about">-멋쟁이 사자처럼</MenuItem>
            <MenuItem to="tree">-운영진 조직도</MenuItem>
            <MenuItem to="/front">-제작팀</MenuItem>
            <MenuItem to="/vision">-우리의 비전</MenuItem>
          </MenuList>
          <MenuList>
            <MenuItem to="frontend">-프론트엔드</MenuItem>
            <MenuItem to="back">-백엔드</MenuItem>
            <MenuItem to="design">-디자인</MenuItem>
          </MenuList>
          <MenuList>
            <MenuItem to="sns">-SNS</MenuItem>
            <MenuItem to="story">-스토리</MenuItem>
          </MenuList>
          <MenuList to="https://knu-likelion.org/" target="_blank">
            <MenuItem to="https://knu-likelion.org/" target="_blank">
              -어플라이 바로가기
            </MenuItem>
          </MenuList>
        </Menu>
      )}
      <Outlet />
    </>
  );
};

export default MainNav;
