import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px;
  width: 100%;
  min-height: 500px;
  background: #c3cdd4;
  color: #0f0e17;
  border-radius: 8px;
  text-align: center;
`;

function Content() {
  return (
    <Main>
      <h1>{window.location.pathname}</h1>
    </Main>
  );
}

export default Content;
