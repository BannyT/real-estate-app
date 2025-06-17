import React from 'react'
import Carousel from '../components/Carousel'
import Banner from './Banner'
import ExploreCategories from './ExploreCategories'
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
    </div>
  )
}

export default Home
