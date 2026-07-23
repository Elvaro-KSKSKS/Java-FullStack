import styled from 'styled-components'
import { colors } from '../../styles'
import { Button } from '../Button/styles'

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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  .container {
    max-width: 1024px;
    background-color: ${colors.rose};
    position: relative;
    z-index: 1;
  }

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 32px;
  padding-right: 8px;

  img {
    height: 16px;
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  display: flex;
  padding: 0 32px 32px;
  color: ${colors.white};
  gap: 24px;

  img {
    width: 280px;
    height: 280px;
  }

  h4 {
    font-size: 18px;
  }

  p {
    margin: 16px 0;
    font-size: 14px;
    line-height: 22px;
  }

  ${Button} {
    width: auto;
    padding: 4px 6px;
  }
`
