import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    font-size: 62.5%;

    /* background-color: ${({ theme }) => theme.COLORS.BG}; */
    /* background-color: ${({ theme }) => theme.COLORS.BG}; */
    background-color: #FAFEFE;
    color: ${({ theme }) => theme.COLORS.GRAY_700};

    -webkit-font-smoothing: antialiased;

    
    &:has(#landingPage) {
        overflow: auto;
    }

  }

  body * {
    font-family: ${({ theme }) => theme.FONT.FAMILY_PRIMARY};
  }

  html, body {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6, legend {
    font-family: "Poppins", sans-serif;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a {
    transition: filter 200ms;
  }

  a:hover:not(.not-hover) {
    filter: brightness(1.1);
  }

  .sr-only {
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  position: absolute;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;

  }

  .code-font {
    font-family: "JetBrains Mono";
  }

  /* SCROLLBAR */
  ::-webkit-scrollbar {
    width: 6px;      
  }

::-webkit-scrollbar-track {
  /* background: orange;    */
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  border-radius: 20px;      
}

  
`;
