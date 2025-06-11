import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Order = () => {
  const {currency} = useContext(ShopContext);
  const [orders,setOrders] = useState([]);

  useEffect(()=>{
    const cartData = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(cartData);

  },[])

  return (
    <div className='pt-10'>
      <div className='font-semibold text-xl mb-10'>ĐƠN HÀNG CỦA TÔI</div>
      <div className='grid grid-cols-[1fr_1fr_1.5fr_2fr_1fr] gap-4 font-semibold border-b py-4'>
        <div>MÃ ĐƠN HÀNG</div>
        <div>NGÀY</div>
        <div>TRẠNG THÁI</div>
        <div>SẢN PHẨM</div>
        <div className='text-right'>TỔNG TIỀN</div>

      </div>
      {orders.map(order => (
        <div key={order.id} className='grid grid-cols-[1fr_1fr_1.5fr_2fr_1fr] gap-4 py-6 border-b'>
          <div>{order.id} </div>
          <div>{order.date} </div>
          <div className='text-green-500'>{order.status} </div>
          {order.items.map((item,index) =>(
            <div key={index} className='flex gap-3'>
              <img src={item.image} alt="" className='w-20 h-24 object-cover' />
              <div>
                <p>{item.name} </p>
                <p className='text-sm text-gray-500 mt-3'>{item.color}, {item.size} | Số lượng: {item.quantity} </p>
              </div>
            </div>
          ))}
          <div className='text-right font-semibold'>
            {order.total.toLocaleString('vi-VN')}{currency}

          </div>

        </div>
        
      ))}

      
    </div>
  )
}

export default Order
