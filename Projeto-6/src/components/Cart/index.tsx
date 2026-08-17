import { useDispatch, useSelector } from 'react-redux'

import { CartContainer, Overlay, Sidebar, CartItem, Price } from './styles'

import { RootReducer } from '../../store'
import Button from '../Button'
import { remove, close } from '../../store/reducers/cart'
import { formatPrice } from '../CardsList'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Price>
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </Price>
        <Button title="Continuar com a entrega">Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
