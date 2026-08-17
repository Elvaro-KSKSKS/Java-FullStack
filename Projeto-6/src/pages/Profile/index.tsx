import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import CardsList from '../../components/CardsList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useGetRestaurantQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Profile = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetRestaurantQuery(id!)

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
      <Cart />
    </>
  )
}

export default Profile
