import styled from "styled-components";
import { Colors } from "./Utils/Colors";
import GridContainer from "./components/Dashboard/GridContainer";
import MenuIcon from "./components/Menubar/MenuIcon";

function App() {
  return (
    <MainFrame>
      <MenuIcon />
      <GridContainer height="85vh" />
    </MainFrame>
  );
}

export default App;

const MainFrame = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${Colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;
