import { createGlobalStyle } from 'styled-components';
import Color from './color';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', serif;
    font-size: 16px;
    letter-spacing: .3px;
    background-color: ${Color.background};
    color: #000;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500
  }

  button {
    cursor: pointer;
  }
`;
