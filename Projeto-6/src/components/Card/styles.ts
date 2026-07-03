import styled from 'styled-components'
import { colors } from '../../styles'

export const HomeCard = styled.div`
  width: 472px;
`

export const ProfileCard = styled.div`
  width: 320px;
  padding: 8px;
  background-color: ${colors.rose};
  color: ${colors.beige};
`

export const ProfileCardImg = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 8px;
`

export const HomeCardImg = styled.div<{ cardImg: string }>`
  background-image: url(${(props) => props.cardImg});
  background-size: cover;
  background-position: center;
  height: 217px;
  width: 472px;
  position: relative;
`

export const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.div`
  background-color: ${colors.rose};
  color: ${colors.white};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
`

export const CardDescription = styled.div`
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${colors.rose};
  background-color: ${colors.white};
  color: ${colors.rose};
  padding: 8px;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  font-size: 18px;
`

export const Rating = styled.div`
  display: flex;

  span {
    font-weight: bold;
    font-size: 18px;
    margin-right: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`
