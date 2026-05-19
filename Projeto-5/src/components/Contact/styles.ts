import styled from 'styled-components'

import variables from '../../styles/variables'
import { ActionBar, Button, Card } from '../../styles'

export const Container = styled(Card)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 40px;
  margin-bottom: 32px;
`

export const Icon = styled.span`
  padding: 0 16px;
  font-size: 3.2rem;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const DescriptionDivisor = styled.div`
  display: flex;

  textarea:last-child {
    flex: 1;
  }
`

export const Description = styled.textarea`
  display: inline-grid;
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  margin-top: 8px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ContactActionBar = styled(ActionBar)`
  border-left: 2px solid rgba(0, 0, 0, 0.1);
  padding-left: 16px;
`

export const CancelRemoveButton = styled(Button)`
  background-color: ${variables.red};
`
