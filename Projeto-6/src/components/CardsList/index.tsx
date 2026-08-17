import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Card from '../Card'
import Button from '../Button'
import { Section, List, Modal, Header, ModalContent } from './styles'
import close from '../../assets/close.svg'
import { MenuItem, Restaurant } from '../../pages/Home'

import { add } from '../../store/reducers/cart'

type Props = {
  profileList?: boolean
  listItems: Restaurant[] | MenuItem[]
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const CardsList = ({ profileList = false, listItems }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modal, setModal] = useState<MenuItem | null>(null)
  const dispatch = useDispatch()

  const addToCart = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    dispatch(add(modal!))
  }

  return (
    <>
      <Section>
        <div className="container">
          <List profileList={profileList}>
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
          </List>
        </div>
      </Section>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <div className="container">
          <Header>
            <img src={close} alt="" onClick={() => setModalIsOpen(false)} />
          </Header>
          <ModalContent>
            <img src={modal?.foto} alt="" />
            <div>
              <h4>{modal?.nome}</h4>
              <p>
                {modal?.descricao} <br /> <br /> Serve: de {modal?.porcao}
              </p>
              <Button title="Adicionar ao carrinho" onClick={addToCart}>
                {`Adicionar ao carrinho - ${formatPrice(modal?.preco)}`}
              </Button>
            </div>
          </ModalContent>
        </div>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
    </>
  )
}

export default CardsList
