import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const LatestProduct = () => {
    const {products} = useContext(ShopContext);
    const latestProduct = products.filter(item => item.latestProduct).slice(0,4);
  return (
    <div>
        <h1 className='text-center font-semibold text-xl my-5 md:text-3xl md:my-12'>SẢN PHẨM MỚI</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
            {latestProduct.map(item => (
                <ProductItem key={item.id} id={item.id}  name={item.name} price={item.price} bestSeller={item.bestSeller} color={item.color} />
            ))}
        </div>
      
    </div>
  )
}

export default LatestProduct