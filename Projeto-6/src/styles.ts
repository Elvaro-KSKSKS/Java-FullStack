import { createGlobalStyle } from 'styled-components'

export const colors = {
  beige: '#ffebd9',
  beigeLight: '#fff8f2',
  rose: '#E66767',
  black: '#000000',
  white: '#FFFFFF'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.beige};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
