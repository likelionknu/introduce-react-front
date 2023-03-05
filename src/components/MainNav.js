<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, Outlet, redirect } from "react-router-dom";
=======
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, Outlet } from "react-router-dom";
>>>>>>> dd869733c6e49784a358483a0488dd1351983ffa
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { TbAlignCenter } from "react-icons/tb";

//keyframes
const menuOpenFrames = keyframes`
 0% {
      height: 0px;
    }
    50% {
      height: 50px;
    }
    100% {
      height: 100px;
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
  padding: 1.5rem 1.5rem;
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
  padding-top: 5px;
  margin-left: 10px;
  color: lightgray;
  width: 13px;
`;
const MainImg = styled.img`
  width: 45px;
  height: 30px;
`;
const MenuIcon = styled(TbAlignCenter)`
  height: 20px;
  color: #4f85eb;
  width: 20px;
`;

// 드롭메뉴 (전체큰창)
const Menu = styled.div`
  position: absolute;
<<<<<<< HEAD
=======
  z-index: 5;
>>>>>>> dd869733c6e49784a358483a0488dd1351983ffa
  top: 60px;
  left: 25%;
  width: 55%;
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
  font-size: 11px;
  margin-top: 7px;
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
<<<<<<< HEAD
          <MainImg src="img/knu.png" alt="강남대멋사"></MainImg>
=======
          <MainImg src="../img/knu.png" alt="강남대멋사"></MainImg>
>>>>>>> dd869733c6e49784a358483a0488dd1351983ffa
          LIKELION KNU
        </Category>
        <Category to="/intro">소개</Category>
        <Category to="/track">트랙</Category>
        <Category to="promote">홍보</Category>
        <Category to="https://knu-likelion.org/" target="_blank">
          어플라이
          <RightArrow />
        </Category>
<<<<<<< HEAD
        <Category to="promote">
=======
        <Category>
>>>>>>> dd869733c6e49784a358483a0488dd1351983ffa
          <MenuIcon onClick={onClick} />
        </Category>
      </CategorisBlock>
      {isMenu && (
        <Menu className={isMenu ? "open" : "close"}>
          <MenuList>
<<<<<<< HEAD
            <MenuItem>-멋쟁이 사자처럼</MenuItem>
            <MenuItem>-운영진 조직도</MenuItem>
            <MenuItem>-제작팀</MenuItem>
            <MenuItem>-우리의 비전</MenuItem>
=======
            <MenuItem to="/about">-멋쟁이 사자처럼</MenuItem>
            <MenuItem>-운영진 조직도</MenuItem>
            <MenuItem to="/front">-제작팀</MenuItem>
            <MenuItem to="/vision">-우리의 비전</MenuItem>
>>>>>>> dd869733c6e49784a358483a0488dd1351983ffa
          </MenuList>
          <MenuList>
            <MenuItem>-프론트엔드</MenuItem>
            <MenuItem>-백엔드</MenuItem>
            <MenuItem>-디자인</MenuItem>
          </MenuList>
          <MenuList>
<<<<<<< HEAD
            <MenuItem>-인스타그램</MenuItem>
            <MenuItem>-페이스북</MenuItem>
            <MenuItem>-스토리</MenuItem>
          </MenuList>
          <MenuList>
            <MenuItem>-어플라이 바로가기</MenuItem>
=======
            <MenuItem to="/sns/@likelion.knu">-인스타그램</MenuItem>
            <MenuItem>-페이스북</MenuItem>
            <MenuItem>-스토리</MenuItem>
          </MenuList>
          <MenuList to="https://knu-likelion.org/" target="_blank">
            <MenuItem to="https://knu-likelion.org/" target="_blank">
              -어플라이 바로가기
            </MenuItem>
>>>>>>> dd869733c6e49784a358483a0488dd1351983ffa
          </MenuList>
        </Menu>
      )}
      <Outlet />
    </>
  );
};

export default MainNav;
