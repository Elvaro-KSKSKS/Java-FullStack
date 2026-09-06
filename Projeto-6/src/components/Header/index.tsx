import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import logo from '../../assets/logo.svg'
import { Background, Centralizer, HeaderBar, Title } from './styles'

import { RootReducer } from '../../store'

type Props = {
  profileHeader?: boolean
  openSidebar?: () => void
}

const Header = ({ profileHeader, openSidebar }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  if (profileHeader) {
    return (
      <Background>
        <div className="container">
          <HeaderBar>
            <Link to="/">
              <a href="#">Restaurantes</a>
            </Link>
            <Link to="/">
              <img src={logo} alt="EFOOD"></img>
            </Link>
            <a onClick={openSidebar}>{items.length} produto(s) no carrinho</a>
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
