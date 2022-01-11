import { createGlobalStyle } from "styled-components";
import background from "./money.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
  
    *, ::after, ::before {
        box-sizing: inherit;
    }
  
    body {
        max-width: 700px;
        min-height: 100vh;
        margin: 0 auto;
        background-image: url("${background}");
        background-position: 50%;
        background-size: cover;
        padding: 0 20px;
        color: ${({ theme }) => theme.color.gallery};
        font-family: "Roboto", sans-serif;
        text-align: center;
    }
`;

