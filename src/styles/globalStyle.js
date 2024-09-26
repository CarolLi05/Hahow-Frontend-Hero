import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    font-family: ${({ theme }) => theme.fontFamily}, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
  
  h1, h2, h3, h4, h5, h6, p, ul, figure, blockquote, dl, dd {
    padding: 0;
    margin: 0;
  }

  button {
    border: none;
    background-color: transparent;
    font-family: inherit;
    padding: 0;
    cursor: pointer;
  }
  
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }
  li {
    list-style-type: none;
  }
  
  html:focus-within {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img, picture {
    max-width: 100%;
    display: block;
  }

  input, button, textarea, select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
