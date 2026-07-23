import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  border: none;
  background-color: ${colors.beige};
  color: ${colors.rose};
  width: 100%;
  cursor: pointer;
`

export const LinkButton = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  margin-top: 16px;
  padding: 4px 6px;
  border: none;
  background-color: ${colors.rose};
  color: ${colors.white};
  text-decoration: none;
  display: inline-block;
`
