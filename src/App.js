import { useState } from "react";
import styled from "styled-components";
import CardDeck from "./components/CardDeck";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import Footer from "./components/Footer";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <ScreenContainer>
      <GlobalStyle />
      <Header />
      <CardDeck/>
      <Footer counter={counter} />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

export default App;
