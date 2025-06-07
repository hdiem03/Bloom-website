import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import AddressSelect from '../components/AddressSelect';
import BankQrCode from '../components/BankQrCode';
import CartTotal from '../components/CartTotal';

const PlaceOrder = () => {
  const [method, setMethod] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const {products,cartItem, setCartItem,navigate, getTotalPayment} = useContext(ShopContext);
  useEffect(()=>{
    if (cartItem.length === 0) {
      navigate('/cart');
      
    }

  },[])
  useEffect(()=>{
    const storedUser = JSON.parse(localStorage.getItem('users'));
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn && storedUser) {
      setFullname(storedUser.fullname || '');
      setEmail(storedUser.email || '');
      setPhone(storedUser.phone || '');
      
    }
  },[])
  const handleSubmit = e =>{
    e.preventDefault();
    const newOrder = {
      orderCode: 'DH' + Math.floor(100000 +Math.random() * 900000),
      orderDate: new Date().toLocaleDateString('vi-VN'),
      status: 'Đặt hàng thành công',
      orderItem: [],
      email,
      paymentMethod: method,
      totalPayment: getTotalPayment,
    }
    for(const item of cartItem) {
      const product = products.find(p => p.id === item.id);
      newOrder.orderItem.push({
        id: item.id,
        name: product.name,
        image: product.color.find(c=> c.name === item.color).image[0],
        size: item.size,
        color: item.color,
        quantity: item.quantity,
      })
    }
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(newOrder);
    
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cartItem');
    setCartItem([]);
    navigate('/order');

  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-6 pt-5 sm:pt-10'>
      <div className='flex flex-col gap-3 w-full md:w-1/3'>
        <h2 className='text-sm sm:text-xl mb-3 font-semibold'>Thông tin mua hàng</h2>
        <input type="text" placeholder='Họ và tên' required className='border px-3 py-2' 
          value={fullname}
          onChange={e=>setFullname(e.target.value)}
        />
        <input type="email" placeholder='Email' required className='border px-3 py-2' 
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
        <input type="text" placeholder='Số điện thoại' required className='border px-3 py-2' 
          value={phone}
          onChange={e=>setPhone(e.target.value)}
        />
        <AddressSelect />
        <input type="text" placeholder='Địa chỉ' required className='border px-3 py-2'/>
        <input type="text" placeholder='Ghi chú' className='border px-3 py-2'/>

      </div>
      <div className='md:w-1/3 md:px-10'>
        <h2 className='text-sm sm:text-xl mb-6 font-semibold'>Phương thức thanh toán</h2>
        <div className='flex flex-col border divide-y'>
          <label className='flex items-center gap-2 p-3 cursor-pointer'>
            <input type="radio" value='bank' checked={method === 'bank'} 
            onChange={()=>setMethod('bank')}
            className='accent-black' />
            <p>Thanh toán bằng ngân hàng</p>
          </label>
          {method === 'bank' && (
            <div className='p-3 border-t'><BankQrCode/></div>
          )}
          <label className='flex items-center gap-2 p-4 cursor-pointer'>
            <input type="radio" value='cod' checked={method === 'cod'}
            onChange={()=> setMethod('cod')}
            className='accent-black' />
            <p>Thanh toán khi giao hàng (COD)</p>
          </label>

        </div>

      </div>
      <div className='w-full md:w-1/3 flex flex-col'>
          <CartTotal/>
          <button type='submit' className='mt-4 py-2 border bg-black text-white hover:bg-white hover:text-black'>
            ĐẶT HÀNG
          </button>

      </div>
      
    </form>
  )
}

export default PlaceOrder