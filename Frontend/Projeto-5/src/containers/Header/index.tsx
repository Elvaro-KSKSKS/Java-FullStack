import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { Field } from '../../styles'

import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

const Header = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.HeaderContainer>
      <S.Brand>
        <span className="material-symbols-outlined">book_5</span>
        <h2>Meus Contatos</h2>
      </S.Brand>
      <div>
        <Field
          placeholder="Buscar um contato"
          value={term}
          onChange={(e) => dispatch(changeTerm(e.target.value))}
        />
      </div>
      <S.AddButton to="/new">
        <span className="material-symbols-outlined">add</span>
        Novo contato
      </S.AddButton>
    </S.HeaderContainer>
  )
}

export default Header
