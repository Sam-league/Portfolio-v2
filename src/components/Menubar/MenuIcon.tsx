import styled from "styled-components";
import { Colors } from "../../Utils/Colors";

const MenuIcon: React.FC = () => {
  return (
    <Wrapper>
      <MenuLine width="70" />
      <MenuLine width="100" />
      <MenuLine width="40" />
    </Wrapper>
  );
};

export default MenuIcon;

const Wrapper = styled.div`
  height: 1.4rem;
  width: 2.5rem;
  /* border: 2px solid ${Colors.lightGrey}; */
  position: absolute;
  right: 2rem;
  top: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
`;

const MenuLine = styled.div<{ width: string }>`
  height: 15%;
  width: ${(props) => props.width}%;
  background-color: ${Colors.primary};
  border-radius: 20px;
`;
