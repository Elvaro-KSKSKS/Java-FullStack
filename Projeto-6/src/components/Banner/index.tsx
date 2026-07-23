import { BackgroundImage, Title } from './styles'

type Props = {
  backgroundImg: string
  title: string
  type: string
}

const Banner = ({ backgroundImg, title, type }: Props) => (
  <BackgroundImage img={backgroundImg}>
    <div className="container">
      <span>{type}</span>
      <Title>{title}</Title>
    </div>
  </BackgroundImage>
)

export default Banner
