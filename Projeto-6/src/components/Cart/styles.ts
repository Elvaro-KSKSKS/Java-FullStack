import styled from 'styled-components'
import { colors } from '../../styles'
import recyclebin from '../../assets/recycle_bin.svg'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.div`
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

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.beige};
  color: ${colors.rose};
  padding: 8px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
  }

  span {
    font-size: 14px;
  }

  button {
    background-image: url(${recyclebin});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin: 40px 0 16px;
`
