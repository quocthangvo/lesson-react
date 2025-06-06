import React from "react";
import styled from "styled-components";
//khai báo const chữ cái đầu in hoa CradStyled
// const CardStyled = styled.tag(h1, h2, h3, div, span, p, strong, img, button);
//CSS-in-JS

const CardStyled = styled.div`
  position: relative;
`;
const CardImage = styled.div`
  width: 400px;
  height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
`;
const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 10px;
`;
const CardStyleContent = styled.div`
  width: 350px;
  height: 100px;
  background-color: #f0f0f0;
  border-radius: 10px;
  align-items: center;
  position: absolute;
  top: 350px;
  left: 25px;
`;
const CardStyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const CardStyleAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const CardStyleSpan = styled.span`
  font-size: 16px;
  font-weight: bold;
  background: linear-gradient(90deg, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Card = () => {
  return (
    <CardStyled>
      <CardImage>
        <CardImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FWF2judaujT30K9sMf-tZFhMWpgP6xCemw&s"></CardImg>
      </CardImage>
      <CardStyleContent>
        <CardStyledDiv>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CardStyleAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNN58XFDLxdqtwwWRSE924NjtuSryXFGxjg&s"></CardStyleAvatar>
            <span>Thang</span>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <span>❤️</span>
            <span>123</span>
          </div>
        </CardStyledDiv>

        <CardStyledDiv>
          <span>Hello World</span>
          <CardStyleSpan>2000 PSL</CardStyleSpan>
        </CardStyledDiv>
      </CardStyleContent>
    </CardStyled>
  );
};

export default Card;
