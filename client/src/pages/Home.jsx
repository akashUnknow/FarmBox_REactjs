import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottamBanner from '../components/BottamBanner'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner/>
      <Categories/>
      <BestSeller/>
      <BottamBanner/>
    </div>
  )
}

export default Home
