import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const RelatedProduct = ({category,excludeId }) => {
    const {products} = useContext(ShopContext);

    const relatedProduct = products.filter(item => category === item.category && item.id !== excludeId).slice(0,4);
 
  return (
    <div>
        <h1 className='text-center font-semibold text-xl my-5 md:text-3xl md:my-12'>SẢN PHẨM TƯƠNG TỰ</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                relatedProduct.map(item => (
                    <ProductItem key={item.id} id={item.id} name={item.name} price={item.price} bestSeller={item.bestSeller} color={item.color}/>
                ))
            }

        </div>
      
    </div>
  )
}

export default RelatedProduct