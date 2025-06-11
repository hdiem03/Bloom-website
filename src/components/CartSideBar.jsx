import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';

const CartSideBar = () => {
  const {currency,getCartCount,cartItem,getCartAmount,setShowCartSidebar, updateQuantity,navigate} = useContext(ShopContext);


  return (
    <div className='fixed inset-0 bg-black bg-opacity-40'>
      <div className='fixed right-0 h-full lg:w-[450px] bg-white flex flex-col'>
        <div className='flex justify-between items-center border-b p-4'>
          <p className='font-semibold lg:text-lg'>Giỏ hàng ({getCartCount()} sản phẩm) </p>
          <button onClick={()=>setShowCartSidebar(false)}>
            <XMarkIcon className='w-6'/>
          </button>

        </div>
        <div className='flex-1 overflow-auto p-4'>
          {
          cartItem.length === 0 ? (
            <p className='text-center pt-5'>Bạn chưa có sản phẩm nào trong giỏ hàng.</p>
          ) :(
            cartItem.map(item => {
              return(
                <div key={`${item.id}-${item.size}-${item.color}`}
                className='flex gap-4 border-b py-4'>
                  <img src={item.image} alt="" className='w-24 h-32 object-cover' />
                  <div className='flex-1'>
                    <p>{item.name} </p>
                    <div className='flex justify-between text-sm my-4'>
                      <p>Màu: {item.color} | Size: {item.size} </p>
                      <p className='font-semibold'>{(item.productPrice).toLocaleString('vi-VN')}{currency} </p>

                    </div>
                    <div className='flex justify-between items-center text-sm'>
                      <p>Số lượng: {item.quantity} </p>
                      <button>
                        <TrashIcon className='w-5'onClick={() => updateQuantity(item.id,item.size,item.color,0)}/>
                      </button>

                    </div>

                  </div>

                </div>
              )
            })
          )}

        </div>
        {cartItem.length > 0 && (
          <div className='border-t p-4 space-y-4'>
            <div className='flex justify-between'>
              <p>Tổng tiền:</p>
              <p className='font-semibold'>{getCartAmount().toLocaleString('vi-VN')}{currency} </p>

            </div>
            <button
              onClick={()=>{
                setShowCartSidebar(false);
                navigate('/cart');
              }}
              className='w-full p-2 bg-black text-white border border-black hover:bg-white hover:text-black'
            >
              XEM GIỎ HÀNG
            </button>

          </div>
        )}

      </div>

    </div>

  )
}

export default CartSideBar
