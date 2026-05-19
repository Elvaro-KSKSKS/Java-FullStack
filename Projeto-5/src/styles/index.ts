import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${variables.backgroundColor};
    color: ${variables.textColor};
  }
`

export const Centralizer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: ${variables.secondaryColor};
  padding: 32px;
  border-radius: 8px;
`

export const MainContainer = styled.main`
  margin-top: 48px;
  padding: 0 40px;
  height: 50vh;
  overflow-y: auto;
`

export const Field = styled.input`
  width: 100%;
  border: none;
  border-radius: 12px;
  color: #666666;
  background-color: ${variables.white};
  font-weight: bold;
  padding: 8px;
`

export const Card = styled.div`
  background-color: ${variables.backgroundColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 16px;
`

export const ActionBar = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  align-content: space-between;
`

export const Button = styled.button`
  display: block;
  font-weight: bold;
  font-size: 12px;
  color: ${variables.white};
  background-color: ${variables.blue};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
`

export const SubmitButton = styled(Button)`
  background-color: ${variables.green};
`

export default GlobalStyle
