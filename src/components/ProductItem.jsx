import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,name,price,color,bestSeller}) => {
  const {currency, getProductPrice} = useContext(ShopContext);
  const [selectedColor, setSelectedColor] = useState(color[0]);
  const [hover,setHover] = useState(false);
  const image = hover && selectedColor.image[1] ? selectedColor.image[1] : selectedColor.image[0];
  const {productPrice,isDiscounted} = getProductPrice(price,bestSeller)
  return (
    <div>
      <Link
        to={`/product/${id}`}
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
      >
        <img src={image} alt='' className='pb-3' />

      </Link>
      <Link to={`/product/${id}`}  className='text-sm lg:text-base'>{name} </Link>

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
            onClick={() => setSelectedColor(c)}
            className={`w-5 h-5 rounded-full border ${selectedColor.name === c.name ? 'border-gray-500' :''}`}
            style={{backgroundColor: c.code}}
          >

          </button>
        ))}

      </div>
      
    </div>
  )
}

export default ProductItem

