import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Poppins", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #000;
    }
`