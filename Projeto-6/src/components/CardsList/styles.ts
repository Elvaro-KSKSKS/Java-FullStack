import styled from 'styled-components'
import { colors } from '../../styles'

export const Section = styled.section`
  background-color: ${colors.beigeLight};
`

export const List = styled.ul<{ profileListList: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.profileList ? '1fr 1fr 1fr' : '1fr 1fr'};
  column-gap: ${(props) => (props.profileList ? '32px' : '80px')};
  row-gap: ${(props) => (props.profileList ? '32px' : '48px')};
  padding-top: ${(props) => (props.profileList ? '56px' : '80px')};
  padding-bottom: 120px;
`
