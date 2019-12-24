import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Random from "./Random";
import Footer from "./component/Footer";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600&display=swap');
  body {
    font-family: 'Kanit', sans-serif;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <div>
      <Layout>
        <GlobalStyle />
        <div></div>
        <Random />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
