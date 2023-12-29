import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  src: string;
  pics: string[];
}

const SqaureImage: React.FC<Props> = ({ src }) => {
  let [left, setLeft] = useState(-100);
  const slideLeft = () => {
    setLeft(0);
  };
  return (
    <Container onClick={slideLeft}>
      <Img src={src} top={0} left={left + 100} />;
      <Img src={src} top={0} left={left} />;
    </Container>
  );
};

export default SqaureImage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Img = styled.div<{ src: string; top: number; left: number }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  transition: all 1s ease;
`;
