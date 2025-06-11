import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const LatestProduct = () => {
    const {products} = useContext(ShopContext);
    const latestProduct = products.filter(item => item.latestProduct).slice(0,4);
  return (
    <>
        <h1 className='text-center font-semibold text-xl my-5 lg:text-3xl lg:my-12'>SẢN PHẨM MỚI</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
            {latestProduct.map(item => (
                <ProductItem key={item.id} id={item.id}  name={item.name} price={item.price} bestSeller={item.bestSeller} color={item.color} />
            ))}
        </div>
      
    </>
  )
}

export default LatestProduct