import React from 'react'
import Carousel from '../components/Carousel'
import Banner from './Banner'
import ExploreCategories from './ExploreCategories'
import LocationPreview from './LocationPreview'
import TopProperties from './TopProperties'
import WhyChooseUs from './WhyChooseUs'

const Home = () => {
  return (
    <div>
       <Carousel/>
       <TopProperties/>
       <ExploreCategories/>
       <Banner/>
       <WhyChooseUs/>
       <LocationPreview/>
    </div>
  )
}

export default Home
