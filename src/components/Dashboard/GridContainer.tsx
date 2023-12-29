import React from "react";
import styled from "styled-components";
import { Colors } from "../../Utils/Colors";
import SqaureImage from "../imageUtils/SqaureImage";

interface Props {
  height: string;
}

const arr: null[] = new Array(25).fill(null);

const coners: number[] = [1, 2, 6, 4, 5, 10, 16, 21, 22, 20, 24, 25];

const Pics: string[] = new Array(9)
  .fill(0)
  .map((v, i) => `./src/assets/Pics/pic${i + 1}.jpg`);

const Patterns: string[] = new Array(4)
  .fill(0)
  .map((v, i) => `./src/assets/Pics/pattern${i + 1}.png`);
console.log("Pics", Pics);

const GridContainer: React.FC<Props> = ({ height }) => {
  return (
    <Grid height={height}>
      {arr.map((v, i) => (
        <Cell
          key={i}
          color={
            coners.includes(i + 1)
              ? "transparent"
              : i % 2 == 0
              ? Colors.primary
              : Colors.black
          }
        >
          {!coners.includes(i + 1) && i % 2 == 0 && (
            <SqaureImage
              pics={Pics}
              src={Pics[Math.floor(Math.random() * 9)]}
            />
          )}
          {!coners.includes(i + 1) && i % 2 != 0 && (
            <SqaureImage
              pics={Pics}
              src={Patterns[Math.floor(Math.random() * 4)]}
            />
          )}
        </Cell>
      ))}
    </Grid>
  );
};

export default GridContainer;

const Grid = styled.div<{ height: string }>`
  height: ${(props) => props.height};
  width: ${(props) => props.height};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

const Cell = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid ${Colors.lightGrey};
  background: ${(props) => props.color};
`;
