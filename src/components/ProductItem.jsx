import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { useState } from "react";

const ProductItem = ({ item }) => {

   const [hoverEffect,setHoverEffext] = useState(' opacity-0')

   const handleHoverEnter =()=>
   {
    setHoverEffext(' opacity-1 bg-[rgba(0,0,0,0.2)]')
   }
   const handleHoverEnd =()=>
   {
    setHoverEffext(' opacity-0')
   }

  return (

    <div className="flex flex-1 items-center justify-center min-w-[200px]  min-h-[250px] h-[300px] overflow-hidden rounded-md shadow-lg m-2 relative" onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverEnd}>
      <img src={item.src} alt="product image" />
      <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100`+ hoverEffect}>
        <div className='h-[40px] w-[40px] rounded-full items-center justify-center m-3 cursor-pointer bg-[white] hover:text-white hover:scale-[1.1] hover:bg-[#894af3] ease-in duration-150'>
          <ShoppingCartOutlined />
        </div>
        <div  className='h-[40px] w-[40px] rounded-full items-center justify-center m-3 cursor-pointer bg-[white] hover:text-white hover:scale-[1.1] hover:bg-[#894af3] ease-in duration-150'>
          <FavoriteBorderOutlined />
        </div>
        <div  className='h-[40px] w-[40px] rounded-full items-center justify-center m-3 cursor-pointer bg-[white] hover:text-white hover:scale-[1.1] hover:bg-[#894af3] ease-in duration-150'>
          <SearchOutlined />
        </div>
      </div>
    </div>
    
  );
};

export default ProductItem;
