import star_favorite from '../../assets/star_favorite.svg'

import * as S from './styles'
import Button from '../Button'

type Props = {
  id: number
  profileCard?: boolean
  cardImg: string
  tags?: string[]
  title: string
  rating?: number
  description: string
  onClick?: () => void
}

const Card = ({
  id,
  profileCard,
  cardImg,
  tags = [],
  title,
  rating,
  description,
  onClick
}: Props) => {
  const cropDescription = (description: string) => {
    const limit = profileCard ? 175 : 280

    if (description.length > limit) {
      return description.slice(0, limit - 3) + '...'
    }
    return description
  }

  if (profileCard) {
    return (
      <S.ProfileCard>
        <S.ProfileCardImg src={cardImg}></S.ProfileCardImg>
        <S.Title>{title}</S.Title>
        <S.Description>{cropDescription(description)}</S.Description>
        <Button title="Adicionar ao carrinho" onClick={onClick}>
          Adicionar ao carrinho
        </Button>
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
      <S.CardInfo>
        <S.Row>
          <S.Title>{title}</S.Title>
          <S.Rating>
            <span>{rating}</span>
            <img src={star_favorite}></img>
          </S.Rating>
        </S.Row>
        <S.Description>{cropDescription(description)}</S.Description>
        <Button link to={`/profile/${id}`} title="Saiba mais">
          Saiba mais
        </Button>
      </S.CardInfo>
    </S.HomeCard>
  )
}

export default Card
