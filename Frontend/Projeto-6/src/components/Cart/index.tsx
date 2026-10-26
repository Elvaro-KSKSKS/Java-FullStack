import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import { RootReducer } from '../../store'
import Button from '../Button'
import { remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'

type Props = {
  onContinue: () => void
}

const Cart = ({ onContinue }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  if (items.length > 0) {
    return (
      <>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>{parseToBrl(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Price>
          <p>Valor total</p>
          <p>{parseToBrl(getTotalPrice(items))}</p>
        </S.Price>
        <Button title="Continuar com a entrega" onClick={onContinue}>
          Continuar com a entrega
        </Button>
      </>
    )
  }
  return (
    <p>
      O carrinho está vazio. Adicione pelo menos um item para prosseguir com a
      compra.
    </p>
  )
}

export default Cart
