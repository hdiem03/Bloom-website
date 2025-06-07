import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { getProductPrice } from '../utils/utils';
import Quantity from './Quantity';

const CartSideBar = () => {
  const {products,getCartCount,setShowCartSidebar,cartItem,updateQuantity,currency,getCartAmount,navigate} = useContext(ShopContext);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-40'>
      <div className='fixed right-0 top-0 h-full w-[350px] md:w-[450px] bg-white flex flex-col'>
        <div className='flex justify-between items-center p-4 border-b'>
          <p className='font-semibold md:text-lg'>Giỏ hàng ({getCartCount()} sản phẩm) </p>
          <button onClick={()=>setShowCartSidebar(false)}>
            <XMarkIcon className='w-5'/>
          </button>

        </div>
        <div className='flex-grow overflow-auto p-4'>
          {cartItem.length === 0 ? (
            <p className='pt-5 text-center'>Bạn chưa có sản phẩm nào trong giỏ hàng.</p>
          ) : (
            cartItem.map(item => {
              const product = products.find(p => p.id === item.id);
              if (!product) return null;
              const {productPrice} = getProductPrice(product.price,product.bestSeller);
              const selectedColorImg = product.color.find(c => c.name === item.color).image[0];
              return (
                <div key={`${item.id}-${item.size}-${item.color}`}
                  className='flex gap-4 border-b py-4'
                >
                  <img src={selectedColorImg} className='h-28 w-24 object-cover'/>
                  <div className='flex-1 flex flex-col'>
                    <p className='text-sm md:text-base'>{product.name} </p>
                    <div className='flex justify-between text-sm my-4'>
                      <p className='text-gray-600'>Màu: {item.color} | Size: {item.size}</p>
                      <p className='text-sm font-semibold'>{productPrice.toLocaleString('vi-VN')}{currency} </p>


                    </div>
                    <div className='flex justify-between items-center'>
                      <p className='text-sm text-gray-600'>Số lượng: {item.quantity}</p>

                      <button onClick={() => updateQuantity(item.id,item.size,item.color,0)}>
                        <TrashIcon className='w-5 h-5'/>
                      </button>
                    </div>

                  </div>

                </div>
              )
            })
          )}

        </div>
        {cartItem.length >0  && (
          <div>
            <div className='flex justify-between p-4 border-t'>
              <p>Tổng tiền:</p>
              <p className='font-semibold'>{getCartAmount().toLocaleString('vi-VN')}{currency} </p>

            </div>
            <div className='p-4'>
              <button
                onClick={() =>{
                  setShowCartSidebar(false);
                  navigate('/cart')
                }}
                className='w-full p-2 bg-black text-white border border-black hover:bg-white hover:text-black'
              >
                XEM GIỎ HÀNG
              </button>
            </div>
            
          </div>
        )}

      </div>
      
    </div>
  )
}

export default CartSideBar