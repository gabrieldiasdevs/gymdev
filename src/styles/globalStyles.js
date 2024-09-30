import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    scroll-behavior: smooth;
  }

  body {
    background-color: #FECE00;
  }

  li {
    list-style: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }
`

export default GlobalStyle