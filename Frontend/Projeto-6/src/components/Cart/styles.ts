import styled from 'styled-components'
import { colors } from '../../styles'
import recyclebin from '../../assets/recycle_bin.svg'

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
