import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { getProductPrice } from '../utils/utils';
import Quantity from '../components/Quantity';
import { TrashIcon } from '@heroicons/react/24/outline';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';

const Cart = () => {
  const {products, currency, cartItem, getCartCount, updateQuantity,navigate} =useContext(ShopContext);
  return (
    <div className='pt-10'>
      <h1 className='md:text-xl mb-3 font-semibold'>GIỎ HÀNG ({getCartCount()} sản phẩm) </h1>
      {cartItem.length >0 ?(
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex-1'>
            <div className='hidden md:grid grid-cols-[2.5fr_1fr_1fr_1fr] py-3'>
              <p>Sản phẩm</p>
              <p className=''>Giá</p>
              <p className=''>Số lượng</p>
              <p className='text-right'>Tạm tính</p>

            </div>
            {/* rendering product */}
            {cartItem.map(item =>{
              const product = products.find(p=> p.id === item.id)
              if (!product) return null;
              const {productPrice, isDiscounted} = getProductPrice(product.price, product.bestSeller)
              const selectedColorImg = product.color.find(c =>c.name === item.color).image[0];
              return(
                <div key={`${item.id}-${item.size}-${item.color}`}
                  className='py-6 border-y grid grid-cols-[2fr_1fr_40px] md:grid-cols-[2.5fr_1fr_1fr_1fr]'
                >
                  <div className='flex gap-4'>
                    <img src={selectedColorImg} className='w-28 md:w-32' />
                    <div>
                      <p className='text-sm md:text-lg'>{product.name} </p>
                      <p className='text-sm my-2'>Màu sắc: {item.color} | Size: {item.size}</p>
                      

                    </div>

                  </div>
                  <div className='flex flex-col  gap-2'>
                    <p>{productPrice.toLocaleString('vi-VN')}{currency} </p>
                        {isDiscounted &&(
                        <p className='text-sm font-semibold text-red-600'>(-50%) </p>
                      )}
                  </div>                  
                  <div className='flex justify-center '>
                    <Quantity qty={item.quantity} setQty={(newQty) => updateQuantity(item.id,item.size,item.color,newQty)}/>

                  </div>
                  <div className='hidden md:flex flex-col items-end justify-between text-base font-semibold pr-2'>
                    {(productPrice * item.quantity).toLocaleString('vi-VN')}{currency}
                    <TrashIcon 
                    onClick={()=>{
                      if (window.confirm('Xóa sản phẩm khỏi giỏ hàng?')) {
                        updateQuantity(item.id,item.size,item.color,0)
                      }
                    }}
                    className='w-5 h-5 cursor-pointer'
                  />

                  </div>


                </div>
              )
            })}

          </div>
          <div className='md:w-[450px]'>
            <CartTotal />
            <button onClick={()=>navigate('/checkout')}
              className='mt-6 w-full py-2 bg-black text-white border border-black hover:text-black hover:bg-white'
            >
              THANH TOÁN
            </button>

          </div>

        </div>

      ):(
        <div className='flex flex-col items-center gap-4'>
          <img src={assets.emptycart} className='w-40 h-28' />
          <p className='text-xl'>GIỎ HÀNG HIỆN ĐANG TRỐNG</p>
          <button 
            onClick={()=> navigate('/collection')}
            className='px-8 py-4 bg-black text-white border border-black hover:bg-white hover:text-black'>
            TIẾP TỤC MUA SẮM
          </button>

        </div>

      )}
      
    </div>
  )
}

export default Cart