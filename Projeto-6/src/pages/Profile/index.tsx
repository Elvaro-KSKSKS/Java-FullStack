import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import CardsList from '../../components/CardsList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useGetRestaurantQuery } from '../../services/api'
import { FixedContainer, Overlay } from './styles'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Loader from '../../components/Loader'

type ProfileParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as ProfileParams
  const { data: restaurant, isLoading } = useGetRestaurantQuery(id)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <Header profileHeader openSidebar={() => setSidebarIsOpen(true)} />
      <Banner
        backgroundImg={restaurant.capa}
        type={restaurant.tipo}
        title={restaurant.titulo}
      />
      <CardsList
        profileList
        listItems={restaurant.cardapio}
        isLoading={isLoading}
      />
      <Footer />
      <FixedContainer className={sidebarIsOpen ? 'is-open' : ''}>
        <Overlay onClick={() => setSidebarIsOpen(false)}></Overlay>
        <Sidebar />
      </FixedContainer>
    </>
  )
}

export default Profile
