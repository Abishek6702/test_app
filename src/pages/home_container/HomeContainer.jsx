import React from 'react'
import Hero from '../hero/Hero'
import Search from '../search/Search'
import Category from '../hero/category/Category'
import Offer from '../hero/offer/Offer'


const HomeContainer = () => {
  return (
    <div>
      {/* <Hero/> */}
      <Hero/>
      <Search/>
      <Category/>
      <Offer/>
    </div>
  )
}

export default HomeContainer
