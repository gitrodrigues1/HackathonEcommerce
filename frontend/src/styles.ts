import { createGlobalStyle } from 'styled-components'

import onari from './assets/fonts/onari.otf'

export const colors = {
  black: '#191919',
  white: '#fdfdfd',
  yellowOrange: '#fa9813',
  desertSand: '#e6cea8',
}

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Onari;
    src: url(${onari});
    font-weight: light;
    font-style: normal;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
  list-style: none;
  text-decoration: none;
  }

  .container {
    width: 80%;
  }
`
