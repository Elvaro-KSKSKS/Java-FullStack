import styled from 'styled-components'
import { colors } from '../../styles'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`

export const SocialLinks = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`

export const Paragraph = styled.p`
  color: ${colors.rose};
  font-size: 10px;
  margin-top: 80px;
  text-align: center;
`
