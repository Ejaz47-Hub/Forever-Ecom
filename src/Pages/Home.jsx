import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import ProductItem from '../Components/ProductItem'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <Newsletter/>
    </div>
  )
}

export default Home