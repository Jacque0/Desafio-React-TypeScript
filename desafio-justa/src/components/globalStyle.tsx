import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
`;

export const MainContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
`;