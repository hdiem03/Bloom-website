import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import { getProductPrice } from '../utils/utils';

const ProductItem = ({id,name,price,color,bestSeller}) => {
  const {currency} = useContext(ShopContext);
  const [selectedColor, setSelectedColor] = useState(color[0]);
  const [hover,setHover] = useState(false);
  const image = hover && selectedColor.image[1] ? selectedColor.image[1] : selectedColor.image[0];
  const {productPrice,isDiscounted} = getProductPrice(price,bestSeller)
  return (
    <Link to={`/product/${id}`}>
      <div
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
      >
        <img src={image}  />

      </div>
      <p className='text-sm md:text-base pt-3'>{name} </p>
      <div className='flex items-center gap-2 my-2'>
        <p className='font-semibold'>{productPrice.toLocaleString('vi-VN')}{currency} </p>
        {isDiscounted && (
          <>
            <p className='line-through text-gray-400 text-sm'>{price.toLocaleString('vi-VN')}{currency} </p>
            <span className='text-red-500 font-semibold'>-50%</span>
          </>
        )}

      </div>
      <div className='flex gap-2'>
        {color.map(c =>(
          <button
            key={c.name}
            onClick={e =>{
              e.preventDefault();
              setSelectedColor(c);
              
            }}
            className={`w-5 h-5 rounded-full border ${selectedColor.name === c.name ? 'border-gray-500' :''}`}
            style={{backgroundColor: c.code}}
          >

          </button>
        ))}

      </div>
      
    </Link>
  )
}

export default ProductItem
