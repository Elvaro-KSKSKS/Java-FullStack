import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Background, Centralizer, HeaderBar, Title } from './styles'

type Props = {
  profileHeader?: boolean
}

const Header = ({ profileHeader }: Props) => {
  if (profileHeader) {
    return (
      <Background>
        <div className="container">
          <HeaderBar>
            <a href="#">Restaurantes</a>
            <Link to="/">
              <img src={logo} alt="EFOOD"></img>
            </Link>
            <a href="#">0 produtos(s) no carrinho</a>
          </HeaderBar>
        </div>
      </Background>
    )
  }
  return (
    <Background>
      <div className="container">
        <Centralizer>
          <Link to="/">
            <img src={logo} alt="EFOOD"></img>
          </Link>
        </Centralizer>
        <Title>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Title>
      </div>
    </Background>
  )
}

export default Header
