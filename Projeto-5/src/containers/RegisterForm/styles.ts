import styled from 'styled-components'
import { ActionBar, Card } from '../../styles'

export const Centralizer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 380px;
  height: 100%;
  max-height: 470px;

  h2 {
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 8px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 75%;

  label {
    input {
      margin-top: 8px;
    }
  }
`

export const FormActionBar = styled(ActionBar)`
  gap: 8px;
  width: 120px;
  margin: 0 auto;
  padding-top: 8px;
`
