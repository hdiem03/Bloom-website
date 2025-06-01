import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
  const {currency} = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]}  />

      </div>
      <div className='flex flex-col justify-between h-20 pt-3 text-sm md:text-base'>
        <p>{name}</p>
        <p className='font-semibold'>{price.toLocaleString('vi-VN')}{currency}</p>

      </div>
      
    </Link>
  )
}

export default ProductItem
