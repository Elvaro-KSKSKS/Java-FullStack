import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remove, edit } from '../../store/reducers/contacts'
import { Button, SubmitButton } from '../../styles'

type Props = {
  id: number
  name: string
  telNumber: string
  email: string
}

const Contact = ({
  id,
  name,
  telNumber: originalTelNumber,
  email: originalEmail
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [telNumber, setTelNumber] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (originalTelNumber.length > 0) {
      setTelNumber(originalTelNumber)
    }
  }, [originalTelNumber])

  useEffect(() => {
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
  }, [originalEmail])

  function cancelEditing() {
    setIsEditing(false)
    setTelNumber(originalTelNumber)
    setEmail(originalEmail)
  }

  return (
    <S.Container>
      <S.Icon className="material-symbols-outlined">account_circle</S.Icon>
      <div>
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {name}
        </S.Title>
        <S.DescriptionDivisor>
          <S.Description
            disabled={!isEditing}
            value={telNumber}
            onChange={(e) => setTelNumber(e.target.value)}
          >
            Telefone
          </S.Description>
          <S.Description
            disabled={!isEditing}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            Email
          </S.Description>
        </S.DescriptionDivisor>
      </div>
      <S.ContactActionBar>
        {isEditing ? (
          <>
            <SubmitButton
              onClick={() => {
                dispatch(
                  edit({
                    id,
                    name,
                    telNumber,
                    email
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </SubmitButton>
            <S.CancelRemoveButton onClick={cancelEditing}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.CancelRemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelRemoveButton>
          </>
        )}
      </S.ContactActionBar>
    </S.Container>
  )
}

export default Contact
