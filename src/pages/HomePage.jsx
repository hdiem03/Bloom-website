import React from 'react'
import Hero from '../components/Hero'
import LatestProduct from '../components/LatestProduct'
import BestSeller from '../components/BestSeller'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LatestProduct/>
      <BestSeller/>
      
    </div>
  )
}

export default HomePage
