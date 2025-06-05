import React from "react";
import CardTailWind from "./CardTailWind";
import styled from "styled-components";

const CardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

const CardList = () => {
  return (
    <CardStyle>
      <CardTailWind></CardTailWind>
      <CardTailWind></CardTailWind>
      <CardTailWind></CardTailWind>
      <CardTailWind></CardTailWind>
      <CardTailWind></CardTailWind>
      <CardTailWind></CardTailWind>
    </CardStyle>
  );
};

export default CardList;
