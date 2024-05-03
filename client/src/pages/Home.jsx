import { useLoaderData } from 'react-router-dom'
import Carousel from '../components/Carousel'
import TabCategories from '../components/TabCategories'

const Home = () => {
  return (
    <div>
      <Carousel />
      <TabCategories />
    </div>
  )
}

export default Home
