import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);

    const bestSeller = products.filter(item => item.bestSeller).slice(0,4);

   
  return (
    <div>
        <h1 className='text-center font-semibold text-xl my-5 md:text-3xl md:my-12'>SẢN PHẨM BÁN CHẠY</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                bestSeller.map(item => (
                    <ProductItem key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} bestSeller={item.bestSeller} color={item.color} imagesByColor={item.imagesByColor}/>
                ))
            }

        </div>
      
    </div>
  )
}

export default BestSeller