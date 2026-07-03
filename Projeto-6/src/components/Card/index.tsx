import star_favorite from '../../assets/star_favorite.svg'

import * as S from './styles'
import Button from '../Button'

type Props = {
  profileCard?: boolean
  cardImg: string
  tags?: Array<string>
  title: string
  rating?: number
  description: string
}

const Card = ({
  profileCard,
  cardImg,
  tags,
  title,
  rating,
  description
}: Props) => {
  if (profileCard) {
    return (
      <S.ProfileCard>
        <S.ProfileCardImg src={cardImg}></S.ProfileCardImg>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <Button title="Adicionar ao carrinho">Adicionar ao carrinho</Button>
      </S.ProfileCard>
    )
  }
  return (
    <S.HomeCard>
      <S.HomeCardImg cardImg={cardImg}>
        <S.TagContainer>
          {tags?.map((tag) => (
            <S.Tag key={tag}>{tag}</S.Tag>
          ))}
        </S.TagContainer>
      </S.HomeCardImg>
      <S.CardDescription>
        <S.Row>
          <S.Title>{title}</S.Title>
          <S.Rating>
            <span>{rating}</span>
            <img src={star_favorite}></img>
          </S.Rating>
        </S.Row>
        <S.Description>{description}</S.Description>
        <Button link to="/profile" title="Saiba mais">
          Saiba mais
        </Button>
      </S.CardDescription>
    </S.HomeCard>
  )
}

export default Card
