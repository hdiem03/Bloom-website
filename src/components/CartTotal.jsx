import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
  const {currency, delivery_fee, getCartAmount, getTotalPayment} = useContext(ShopContext);

  return (
    <div className='bg-gray-50 p-4 space-y-4'>
      <p className='text-xl font-semibold'>Tổng tiền đơn hàng</p>
      <div className='flex justify-between'>
        <p>Tạm tính</p>
        <p>{getCartAmount().toLocaleString('vi-VN')}{currency} </p>

      </div>
      <div className='flex justify-between'>
        <p>Phí vận chuyển</p>
        <p>{delivery_fee.toLocaleString('vi-VN')}{currency} </p>

      </div>
      <div className='flex justify-between font-semibold'>
        <p>Tổng thanh toán</p>
        <p>{getTotalPayment().toLocaleString('vi-VN')}{currency} </p>

      </div>
      
    </div>
  )
}

export default CartTotal
