import React from 'react';
import './Card.scss';
import styled from 'styled-components';
const imgUrl1 = require('../img/test1.png');
const imgUrl2 = require('../img/test2.jpg');
const imgUrl3 = require('../img/test3.png');

const items = [
  { id: 1, url: imgUrl1 },
  { id: 2, url: imgUrl2 },
  { id: 3, url: imgUrl3 },
];
const MovieCard = ({ item }) => {
  const { title, department, setid, pubDate,hobby, userRating } = item;
  return (
    <div className="card-container">
        
        {items.map(item => {
          return (
            <div>
                {setid === item.id
                ?<CardImg image={item.url}/>
                :null
                }
            </div>
          );
        })}
        
      <div className="text">
        <h2>{title}</h2>
        <h6>{department}</h6>
        <br></br>
        <div>{`${pubDate}학번`}</div>
        <div>{hobby}</div>
        <div className="summary-row">
        <br></br>
        </div>
        <div className="likes">{`${userRating}`}</div>
      </div>
    </div>
  );
};

const CardImg = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 111 !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, rgba(0, 0, 0, 1)),
    color-stop(0.35, rgba(0, 0, 0, 1)),
    color-stop(0.5, rgba(0, 0, 0, 1)),
    color-stop(0.65, rgba(0, 0, 0, 1)),
    color-stop(0.85, rgba(0, 0, 0, 0.6)),
    color-stop(1, rgba(0, 0, 0, 0))
  );
  position: relative;
`;

export default MovieCard;