import styled from 'styled-components'
import image from '../../assets/banner.png'
import { colors } from '../../styles'

export const BackgroundImage = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 280px;
  position: relative;
  padding: 32px 0;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.black};
    content: '';
    opacity: 0.5;
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    span {
      font-weight: 100;
      font-size: 32px;
      color: ${colors.white};
    }
  }
`

export const Title = styled.h2`
  color: ${colors.white};
  font-size: 32px;
  max-width: 450px;
`
