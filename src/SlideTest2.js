import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    outline: none;
    bottom: -50px;
    margin-top: 200px;
  }
  .slick-slide div {
    outline: none;
  }
`;

const ImageContainer = styled.div`
  margin: 0 16px;
`;

const Image = styled.img`
  min-width: 50%;
  min-height: 50%;
  max-width: 50%;
  max-height: 50%;
`;

const imgUrl1 = require("./img/1.png");
const imgUrl2 = require("./img/2.png");
const imgUrl3 = require("./img/3.png");

const items = [
  { id: 1, url: imgUrl1 },
  { id: 2, url: imgUrl2 },
  { id: 3, url: imgUrl3 },
  { id: 4, url: imgUrl1 },
  { id: 5, url: imgUrl2 },
  { id: 6, url: imgUrl3 },
];
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      cssEase: "linear",
    };
    return (
      <Container>
        <h2> Auto play</h2>
        <StyledSlider {...settings}>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.url} />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }
}
