import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import utensils from '../../assets/utensils.svg'

export const Background = styled.div`
  background-image: url(${utensils});
  background-repeat: repeat;
  background-size: 40px 32px;
  padding: 40px 0;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const Centralizer = styled.div`
  display: flex;
  justify-content: center;
`

export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.rose};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const HeaderBar = styled.div`
  padding-bottom: 24px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${colors.rose};
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
      padding-top: 16px;
      text-align: center;
    }
  }

  h1 {
    line-height: 0;
  }
`

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  > a {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const CartButton = styled.button`
  color: ${colors.rose};
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-self: end;
  gap: 8px;

  span {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const Title = styled.h1`
  margin-top: 136px;
  font-size: 36px;
  text-align: center;
  color: ${colors.rose};
`
