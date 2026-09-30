import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'
import * as S from './styles'

import { RootReducer } from '../../store'
import { useState } from 'react'

type Props = {
  profileHeader?: boolean
  openSidebar?: () => void
}

const Header = ({ profileHeader, openSidebar }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (profileHeader) {
    return (
      <S.Background>
        <div className="container">
          <S.HeaderBar>
            <S.HeaderRow>
              <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span />
                <span />
                <span />
              </S.Hamburguer>
              <Link
                title="Clique aqui para acessar a lista de restaurantes"
                to="/"
              >
                <a href="#">Restaurantes</a>
              </Link>
              <S.Centralizer>
                <Link to="/">
                  <h1>
                    <img src={logo} alt="EFOOD"></img>
                  </h1>
                </Link>
              </S.Centralizer>
              <S.CartButton onClick={openSidebar}>
                {items.length} <span>produto(s) no carrinho</span>
                <img src={cart} />
              </S.CartButton>
            </S.HeaderRow>
            <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
              <Link
                title="Clique aqui para acessar a lista de restaurantes"
                to="/"
              >
                <a href="#">Restaurantes</a>
              </Link>
            </S.NavMobile>
          </S.HeaderBar>
        </div>
      </S.Background>
    )
  }
  return (
    <S.Background>
      <div className="container">
        <S.Centralizer>
          <Link to="/">
            <h1>
              <img src={logo} alt="EFOOD"></img>
            </h1>
          </Link>
        </S.Centralizer>
        <S.Title>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </S.Title>
      </div>
    </S.Background>
  )
}

export default Header
