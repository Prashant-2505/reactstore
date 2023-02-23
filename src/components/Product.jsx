import React from 'react'
import { productApi } from '../apifolder/productApi'
import ProductItem from './ProductItem'

const Product = () => {
  return (
    <div className='flex flex-wrap p-5 items-center justify-center'>
       {
        productApi.map((Product,index)=>
        {
            return <ProductItem item={Product} key ={index}/>
        })
       }
    </div>
  )
}

export default Product
