import CardsList from '../../components/CardsList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Header />
      <CardsList listItems={restaurants} isLoading={isLoading} />
      <Footer />
    </>
  )
}

export default Home
