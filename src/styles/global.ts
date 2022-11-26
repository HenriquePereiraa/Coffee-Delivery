import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin:0;
      padding:0;
      box-sizing:border-box
    }

    body {
      color: ${(props) => props.theme["gray-400"]}
    }

    body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight:400;
    }
`;
