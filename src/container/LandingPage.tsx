import { useTheme } from "styled-components";
import styled from "styled-components";

import Autocomplete from "../components/Autocomplete";
import Switch from "../components/Switch";

const Wrapper = styled.div`
  background: ${(props) =>
    props.theme.mode === "dark" ? "#1f1e34" : "#fdfdfd"};
  height: 100vh;
`;

const Header = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 5%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 5%;
`;

const LandingPage = () => {
  const { toggleTheme } = useTheme();

  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  return (
    <Wrapper>
      <Header>
        <Switch label="Enable dark mode?" onChange={toggleTheme} />
      </Header>
      <Content>
        <Autocomplete suggestions={rainbowColors} />
      </Content>
    </Wrapper>
  );
};

export default LandingPage;
