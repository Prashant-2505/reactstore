
import React from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
       <Announce/>
       <Navbar/>
        <Slider/>
        <Categories/>
        <Product/>
    </div>

  )
}

export default Home

