import * as S from './styles'

type Props = {
  backgroundImg: string
  title: string
  type: string
}

const Banner = ({ backgroundImg, title, type }: Props) => (
  <S.BackgroundImage img={backgroundImg}>
    <div className="container">
      <span>{type}</span>
      <S.Title>{title}</S.Title>
    </div>
  </S.BackgroundImage>
)

export default Banner
