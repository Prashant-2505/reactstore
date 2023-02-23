import React from 'react'
import {ApiCategory} from '../apifolder/categoryApi'
import Category from './Category'
const Categories = () => {
  return (
    <div className='flex justify-between items-center p-5'>
    {
        ApiCategory.map((categories,index)=>
        {
              return <Category item={categories} key ={index}/>
        })
    }
    </div>
  )
}

export default Categories
