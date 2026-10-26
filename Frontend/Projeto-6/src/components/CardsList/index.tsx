import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Card from '../Card'
import Button from '../Button'
import * as S from './styles'
import close from '../../assets/close.svg'

import { add } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import Loader from '../Loader'

type Props = {
  profileList?: boolean
  listItems?: Restaurant[] | MenuItem[]
  isLoading: boolean
}

const CardsList = ({ profileList = false, listItems, isLoading }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modal, setModal] = useState<MenuItem | null>(null)
  const dispatch = useDispatch()

  const addToCart = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    dispatch(add(modal!))
    setModalIsOpen(false)
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <S.Section>
        <div className="container">
          <S.List profileList={profileList}>
            {profileList
              ? (listItems as MenuItem[]).map((item) => (
                  <Card
                    profileCard
                    key={item.id}
                    id={item.id}
                    cardImg={item.foto}
                    title={item.nome}
                    description={item.descricao}
                    onClick={() => {
                      setModal({
                        id: item.id,
                        foto: item.foto,
                        nome: item.nome,
                        descricao: item.descricao,
                        porcao: item.porcao,
                        preco: item.preco
                      })
                      setModalIsOpen(true)
                    }}
                  />
                ))
              : (listItems as Restaurant[]).map((item) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    cardImg={item.capa}
                    tags={[
                      item.tipo,
                      ...(item.destacado ? ['Destaque da semana'] : [])
                    ]}
                    title={item.titulo}
                    rating={item.avaliacao}
                    description={item.descricao}
                  />
                ))}
          </S.List>
        </div>
      </S.Section>
      <S.Modal className={modalIsOpen ? 'visible' : ''}>
        <div className="container">
          <S.Header>
            <img src={close} alt="" onClick={() => setModalIsOpen(false)} />
          </S.Header>
          <S.ModalContent>
            <img src={modal?.foto} alt="" />
            <div>
              <h4>{modal?.nome}</h4>
              <p>
                {modal?.descricao} <br /> <br /> Serve: de {modal?.porcao}
              </p>
              <Button title="Adicionar ao carrinho" onClick={addToCart}>
                {`Adicionar ao carrinho - ${parseToBrl(modal?.preco)}`}
              </Button>
            </div>
          </S.ModalContent>
        </div>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </S.Modal>
    </>
  )
}

export default CardsList
