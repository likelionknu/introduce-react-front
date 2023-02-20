import styled, { createGlobalStyle } from "styled-components";
import SideNav from "./SideNav";
import Content from "./Content";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ffffff;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  color: #a7a9be;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <SideNav />
      <Content />
    </Layout>
  );
}

export default App;