
import React from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
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
        <NewsLetter/>
        <Footer/>
    </div>

  )
}

export default Home

