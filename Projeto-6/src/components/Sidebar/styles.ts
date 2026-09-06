import styled from 'styled-components'
import { colors } from '../../styles'

export const SidebarContainer = styled.div`
  background-color: ${colors.rose};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  ul {
    display: grid;
    gap: 8px;
  }
`
