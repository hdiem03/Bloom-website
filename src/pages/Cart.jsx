import React, { useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import Quantity from '../components/Quantity';
import { assets } from '../assets/assets';
import { TrashIcon } from '@heroicons/react/24/outline';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const {products, currency, cartItem, getCartCount, updateQuantity,navigate} = useContext(ShopContext);

  const cartData = [];
  for (const itemId in cartItem){
    for(const size in cartItem[itemId]){
        
      if (cartItem[itemId][size] >0) {
        cartData.push({
          id: itemId,
          size: size,
          quantity: cartItem[itemId][size]

        })
          
      }
    }
   }

  return (
    <div className='pt-10'>
      <div className='md:text-xl mb-3 font-semibold'>
        GIỎ HÀNG ({getCartCount()} sản phẩm)
        
      </div>
      
      {
        cartData.length >0 ?(
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='flex-1'>
              {/* header */}
              <div className='hidden md:grid grid-cols-[2fr_1fr_1fr_40px] py-3 font-semibold'>
                <p>SẢN PHẨM</p>
                <p className='text-center'>SỐ LƯỢNG</p>
                <p className='text-center'>TỔNG TIỀN</p>
              </div>
              {/* rendering product */}
              {
                cartData.map((item,index)=>{
                  const productData = products.find((product) => product.id === item.id);
                  return(
                    <div
                      key={index} 
                      className='py-6 border-t border-b grid grid-cols-[2fr_1fr_40px] md:grid-cols-[2fr_1fr_1fr_40px] '
                    >
                      <div className='flex gap-4'>
                        <img className='w-28 md:w-32' src={productData.image[0]} />
                        <div className=''>
                          <p className='text-sm md:text-lg'>{productData.name} </p>

                          <p className='text-sm my-2'>Màu sắc: {productData.color} | Size: {item.size}</p>
                          <p>{productData.price.toLocaleString('vi-VN')}{currency}</p>


                        </div>

                      </div>
                      <div className='flex justify-center'>
                        <Quantity
                          qty={item.quantity}
                          setQty={(newQty) => updateQuantity(item.id, item.size, newQty)}
                        />

                      </div>
                      <div className='hidden md:block  text-base font-semibold text-center'>
                        {(productData.price * item.quantity).toLocaleString('vi-VN')}{currency}
                      </div>
                      <TrashIcon onClick={()=>updateQuantity(item.id, item.size,0)} className='w-5 h-5 cursor-pointer'/>

                    </div>
                  )
                })
              }

            </div>
            <div className='md:w-[450px]'>
              <CartTotal />
              <button onClick={() => navigate('/place-order')} className='mt-6 w-full py-2 bg-black text-white border border-black hover:bg-white hover:text-black'>
                THANH TOÁN
              </button>

            </div>

          </div>
        ) : (
          <div className='flex flex-col items-center gap-4'>
            <img className='w-40 h-28' src={assets.emptycart}  />
            <p className='text-black text-xl'>GIỎ HÀNG HIỆN ĐANG TRỐNG</p>
            <button onClick={()=>navigate('/collection')} className='px-8 py-4 bg-black text-white border border-black hover:bg-white hover:text-black'>
              TIẾP TỤC MUA SẮM
            </button>

          </div>

          

        )
      }
      
      
    </div>
  )
}

export default Cart
