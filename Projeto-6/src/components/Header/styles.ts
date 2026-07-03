import styled from 'styled-components'
import { colors } from '../../styles'
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

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${colors.rose};
  }
`

export const Title = styled.h1`
  margin-top: 136px;
  font-size: 36px;
  text-align: center;
  color: ${colors.rose};
`
