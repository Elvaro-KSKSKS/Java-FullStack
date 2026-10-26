import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Button } from '../Button/styles'

export const Section = styled.section`
  background-color: ${colors.beigeLight};

  .container {
    display: flex;
    justify-content: center;
  }
`

export const List = styled.ul<{ profileList: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.profileList ? '1fr 1fr 1fr' : '1fr 1fr'};
  column-gap: ${(props) => (props.profileList ? '32px' : '80px')};
  row-gap: ${(props) => (props.profileList ? '32px' : '48px')};
  padding-top: ${(props) => (props.profileList ? '56px' : '80px')};
  padding-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: ${(props) =>
      props.profileList ? '1fr 1fr' : '1fr'};
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
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

    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
    }
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

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;

    img {
      width: 100%;
      height: auto;
    }
  }
`
