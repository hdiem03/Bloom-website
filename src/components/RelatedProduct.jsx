import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const RelatedProduct = ({category}) => {
    const {products} = useContext(ShopContext);
    const [relatedProduct, setRelatedProduct] = useState([]);

    useEffect(()=>{
        setRelatedProduct(products.filter(item => category === item.category).slice(0,4))

    },[category])
  return (
    <div>
        <h1 className='text-center font-semibold text-xl my-5 md:text-3xl md:my-12'>SẢN PHẨM TƯƠNG TỰ</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                relatedProduct.map(item => (
                    <ProductItem key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
                ))
            }

        </div>
      
    </div>
  )
}

export default RelatedProduct
