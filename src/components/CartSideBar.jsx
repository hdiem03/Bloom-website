import React, { useContext} from 'react'
import Quantity from './Quantity';
import { ShopContext } from '../context/ShopContext';
import { TrashIcon } from '@heroicons/react/24/outline';

const CartSideBar = () => {
  const { products, currency, cartItem, getCartCount, updateQuantity, getCartAmount, navigate,  setShowCartSidebar } = useContext(ShopContext);

    const cartData = [];
    for (const itemId in cartItem) {
      for (const size in cartItem[itemId]) {
        if (cartItem[itemId][size] > 0) {
          cartData.push({
            id: itemId,
            size: size,
            quantity: cartItem[itemId][size]
          });
        }
      }
    }

  return (
    <>
      <div
        className='fixed inset-0 bg-black bg-opacity-35'
        onClick={() => setShowCartSidebar(false)}
      />
      <div
        className='fixed right-0 top-0 h-full w-[350px] md:w-[450px] bg-white flex flex-col'
      >
        <div className='flex justify-between items-center p-4 border-b'>
          <p className='font-semibold md:text-lg'>Giỏ hàng ({getCartCount()} sản phẩm)</p>
          <button onClick={() => setShowCartSidebar(false)} className='text-3xl'>&times;</button>
        </div>

        <div className='flex-grow overflow-auto p-4'>
          {cartData.map((item, index) => {
            const product = products.find(p => p.id === item.id);

            return (
              <div key={index} className='flex gap-4 border-b py-4'>
                <img src={product.image[0]} className='h-24 w-20 object-cover' />

                <div className='flex flex-col flex-1'>
                  <div>
                    <p className='text-sm md:text-base'>{product.name}</p>
                  </div>

                  <div>
                    <div className='flex justify-between text-sm text-gray-600 my-2'>
                      <p>Màu: {product.color[0]} | Size: {item.size}</p>
                      <button onClick={() => updateQuantity(item.id, item.size, 0)}>
                        <TrashIcon className='w-5 h-5' />
                      </button>
                    </div>
                    <div className='flex justify-between items-center'>
                      <div className='scale-75 origin-left'>
                        <Quantity
                          qty={item.quantity}
                          setQty={(newQty) => updateQuantity(item.id, item.size, newQty)}
                        />
                      </div>
                      <p className='font-semibold text-sm'>{product.price.toLocaleString('vi-VN')}{currency}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className='flex justify-between p-4 border-t'>
          <p>Tổng tiền:</p>
          <p className='font-semibold'>{getCartAmount().toLocaleString('vi-VN')}{currency}</p>
        </div>

        {cartData.length >0 && (
          <div className="p-4">
            <button
              onClick={() => {
                navigate('/cart');
                setShowCartSidebar(false);
              }}
              className='w-full py-2 bg-black text-white border border-black hover:bg-white hover:text-black'
            >
              XEM GIỎ HÀNG
            </button>
          </div>
        )

        }
      </div>
    </>
  )
}

export default CartSideBar;
