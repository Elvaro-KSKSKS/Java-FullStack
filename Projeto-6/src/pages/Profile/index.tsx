import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import CardsList from '../../components/CardsList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Restaurant } from '../Home'

const Profile = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header profileHeader />
      <Banner
        backgroundImg={restaurant.capa}
        type={restaurant.tipo}
        title={restaurant.titulo}
      />
      <CardsList profileList listItems={restaurant.cardapio} />
      <Footer />
    </>
  )
}

export default Profile
