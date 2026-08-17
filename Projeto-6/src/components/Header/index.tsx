import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/logo.svg'
import { Background, Centralizer, HeaderBar, Title } from './styles'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  profileHeader?: boolean
}

const Header = ({ profileHeader }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

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
            <a onClick={openCart}>{items.length} produto(s) no carrinho</a>
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
