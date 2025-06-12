import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Quantity from '../components/Quantity';
import { TrashIcon } from '@heroicons/react/24/outline';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';

const Cart = () => {
  const {products,getCartCount,cartItem,currency,updateQuantity,navigate,getProductPrice} = useContext(ShopContext);

  return (
    <div>
      <p className='font-semibold text-xl pt-10'>Giỏ hàng ({getCartCount()} sản phẩm) </p>
      {cartItem.length >0 ? (
        <div className='flex flex-col lg:flex-row gap-10 mt-3'>
          <div className='flex-1'>
            <div className='hidden lg:grid grid-cols-[2.5fr_1fr_1fr_1fr] py-4'>
              <div>Sản phẩm</div>
              <div>Giá</div>
              <div>Số lượng</div>
              <div className='text-right'>Tạm tính</div>

            </div>
            {cartItem.map(item => (
                <div 
                  key={`${item.id}-${item.size}-${item.color}`}
                  className='grid grid-cols-[1fr_0.5fr_1fr_1px] lg:grid-cols-[2.5fr_1fr_1fr_1fr] border-y py-4'
                >
                  <div className='flex gap-4'>
                    <img src={item.image} alt="" className='w-32' />
                    <div>
                      <p className='lg:text-lg'>{item.name} </p>
                      <p className='text-sm my-2'>Màu: {item.color} | Size: {item.size} </p>
                    </div>

                  </div>
                  <div>
                    <p>{(item.productPrice).toLocaleString('vi-VN')}{currency} </p>
                    {item.isDiscounted && (
                      <p className='text-red-600 font-semibold text-sm'>(-50%)</p>
                    )}
                  </div>
                  <div>
                    <Quantity qty={item.quantity} setQty={newQty =>updateQuantity(item.id,item.size,item.color,newQty)}/>
                  </div>
                  <div className='flex flex-col justify-between items-end font-semibold'>
                    {((item.productPrice) * item.quantity).toLocaleString('vi-VN')}{currency}
                    <TrashIcon 
                      onClick={() =>{
                        if (window.confirm('Xóa sản phẩm khỏi giỏ hàng?')) {
                          updateQuantity(item.id,item.size,item.color,0)
                        }
                      } } 
                      className='w-5 cursor-pointer'
                    />
                  </div>

                </div>
              )
            )}

          </div>
          <div className='lg:w-[450px]'>
            <CartTotal />
            <button
              onClick={()=>navigate('/checkout')}
              className='w-full p-2 bg-black text-white border border-black hover:bg-white hover:text-black mt-6'
            >
              THANH TOÁN
            </button>

          </div>

        </div>
      ): (
        <div className='flex flex-col items-center gap-4'>
          <img src={assets.emptycart} alt="" className='w-40 h-28' />
          <p className='text-xl'>GIỎ HÀNG ĐANG TRỐNG</p>
          <button
            onClick={() => navigate('/collection')}
            className='px-8 py-4 bg-black text-white border border-black hover:bg-white hover:text-black'
          >
            TIẾP TỤC MUA SẮM
          </button>

        </div>
      )}    
    </div>
  )
}

export default Cart
