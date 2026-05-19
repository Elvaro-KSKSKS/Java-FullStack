import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { CancelRemoveButton } from '../../components/Contact/styles'
import { Field, MainContainer, SubmitButton } from '../../styles'
import * as S from './styles'

import { register } from '../../store/reducers/contacts'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [telNumber, setTelNumber] = useState('')
  const [email, setEmail] = useState('')

  const registerContact = (event: FormEvent) => {
    event.preventDefault()

    dispatch(register({ name, telNumber, email }))
    navigate('/')
  }

  return (
    <MainContainer>
      <S.Centralizer>
        <S.Container>
          <h2>Cadastrar Contato</h2>
          <S.Form onSubmit={registerContact}>
            <label htmlFor="nome">
              Nome
              <Field
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="nome"
              />
            </label>
            <label htmlFor="telNumber">
              Telefone
              <Field
                value={telNumber}
                onChange={(e) => setTelNumber(e.target.value)}
                id="telNumber"
              />
            </label>
            <label htmlFor="email">
              Email
              <Field
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
              />
            </label>
            <S.FormActionBar>
              <SubmitButton type="submit">Enviar</SubmitButton>
              <CancelRemoveButton type="button" onClick={() => navigate('/')}>
                Cancelar
              </CancelRemoveButton>
            </S.FormActionBar>
          </S.Form>
        </S.Container>
      </S.Centralizer>
    </MainContainer>
  )
}

export default RegisterForm
