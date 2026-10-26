import styled from 'styled-components'
import { colors } from '../../styles'
import { Button } from '../Button/styles'

type InputGroupProps = {
  $maxWidth?: string
}

export const Form = styled.form`
  color: ${colors.beige};
  background-color: ${colors.rose};

  h4 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  ${Button} {
    margin-bottom: 8px;
  }
`

export const FormInputDivisor = styled.div`
  margin-bottom: 24px;
`

export const MessageContainer = styled.div`
  color: ${colors.beige};

  h4 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  ${Button} {
    margin-bottom: 8px;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.$maxWidth || 'auto'};
  margin-bottom: 8px;

  label {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${colors.beige};
    border: 1px solid ${colors.beige};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 2px solid red;
    }
  }
`
