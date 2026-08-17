import { useEffect, useState } from 'react'
import CardsList from '../../components/CardsList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useGetRestaurantsQuery } from '../../services/api'

export type MenuItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <CardsList listItems={restaurants} />
      <Footer />
    </>
  )
}

export default Home
