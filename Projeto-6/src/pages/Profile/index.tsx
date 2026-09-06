import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import CardsList from '../../components/CardsList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useGetRestaurantQuery } from '../../services/api'
import { FixedContainer, Overlay } from './styles'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'

const Profile = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetRestaurantQuery(id!)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header profileHeader openSidebar={() => setSidebarIsOpen(true)} />
      <Banner
        backgroundImg={restaurant.capa}
        type={restaurant.tipo}
        title={restaurant.titulo}
      />
      <CardsList profileList listItems={restaurant.cardapio} />
      <Footer />
      <FixedContainer className={sidebarIsOpen ? 'is-open' : ''}>
        <Overlay onClick={() => setSidebarIsOpen(false)}></Overlay>
        <Sidebar />
      </FixedContainer>
    </>
  )
}

export default Profile
