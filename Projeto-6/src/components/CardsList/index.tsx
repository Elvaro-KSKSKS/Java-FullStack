import { useState } from 'react'

import Card from '../Card'
import Button from '../Button'
import { Section, List, Modal, Header, ModalContent } from './styles'
import close from '../../assets/close.svg'
import { MenuItem, Restaurant } from '../../pages/Home'

type Props = {
  profileList?: boolean
  listItems: Restaurant[] | MenuItem[]
}

type ModalItem = {
  id: number
  img: string
  title: string
  description: string
  porcao: string
  preco: number
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const CardsList = ({ profileList, listItems }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modal, setModal] = useState<ModalItem>()

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
                        img: item.foto,
                        title: item.nome,
                        description: item.descricao,
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
            <img src={modal?.img} alt="" />
            <div>
              <h4>{modal?.title}</h4>
              <p>
                {modal?.description} <br /> <br /> Serve: de {modal?.porcao}
              </p>
              <Button title="Adicionar ao carrinho">
                {`Adicionar ao carrinho - ${formataPreco(modal?.preco)}`}
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
