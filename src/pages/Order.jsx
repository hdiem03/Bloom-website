import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Order = () => {
  const { currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrderData(storedOrders);
  }, []);

  return (
    <div className='pt-10'>
      <h2 className='md:text-xl font-semibold'>ĐƠN HÀNG CỦA TÔI</h2>

      <div className='grid grid-cols-[1fr_1fr_1.5fr_2fr_1fr] gap-4 font-semibold pt-14 pb-5 border-b text-xs md:text-sm'>
        <p>MÃ ĐƠN HÀNG</p>
        <p>NGÀY</p>
        <p>TRẠNG THÁI</p>
        <p>SẢN PHẨM</p>
        <p className='text-right'>TỔNG TIỀN</p>
      </div>

      {orderData.length === 0 && <p>Chưa có đơn hàng nào.</p>}

      {orderData.map((order, idx) => (
        <div
          key={idx}
          className='grid grid-cols-[1fr_1fr_1.5fr_2fr_1fr] gap-4 py-4 border-b'
        >
          <div className='text-xs md:text-base'>{order.orderCode}</div>
          <div className='text-xs md:text-base'>{order.orderDate}</div>
          <div className='text-xs md:text-base text-green-600'>{order.status}</div>
          <div className='flex flex-col gap-2 text-sm md:text-base'>
            {order.items.map((item, i) => (
              <div key={i} className='flex gap-4'>
                <img src={item.image} className='w-20 h-24 object-cover' alt={item.name} />
                <div className='hidden md:block'>
                  <p>{item.name}</p>
                  <p className='text-gray-500'>
                    Size: {item.size} | Số lượng: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className='text-right text-xs md:text-base font-semibold'>
            {order.items.reduce((sum, item) => sum + item.total, 0).toLocaleString('vi-VN')} {currency}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
