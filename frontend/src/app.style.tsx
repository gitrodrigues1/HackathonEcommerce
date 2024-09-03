import { createGlobalStyle } from 'styled-components'

import onari from './assets/fonts/onari.otf'

export const Reset = createGlobalStyle `
    @font-face {
        font-family: Onari;
        src: url(${onari});
        font-weight: light;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'New Amsterdam', sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body {
        font-family: "Roboto Condensed", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #000;
    }
    
    .container {
        width: 80%;
    }
`