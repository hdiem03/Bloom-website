import React, { useContext, useEffect, useState } from 'react'
import AddressSelect from '../components/AddressSelect'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'
import BankQrCode from '../components/BankQrCode'

const PlaceOrder = () => {
  const {getTotalPayment,cartItem,setCartItem,navigate} = useContext(ShopContext);
  const [method,setMethod] = useState('');
  const [fullname,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [message,setMessage] = useState('');
  
  useEffect(() =>{
    if (cartItem.length === 0) {
      navigate('/cart')
    }

  },[])

  useEffect(() =>{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setFullName(currentUser.fullname);
      setEmail(currentUser.email);
      setPhone(currentUser.phone);
      
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!method) {
      setMessage('Vui lòng chọn phương thức thanh toán!');
      return;
      
    }

    const cartData = JSON.parse(localStorage.getItem('cartItem'));
    const newOrder = {
      id: 'DH' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('vi-VN'),
      status: 'Đặt hàng thành công',
      items: cartData,
      total: getTotalPayment()

    }

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const updatedOrders = [...existingOrders,newOrder];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    localStorage.setItem('cartItem',JSON.stringify([]));
    setCartItem([]);

    navigate('/orders');
    
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row gap-10 pt-10'>
      <div className='flex-1 flex flex-col gap-4'>
        <div className='font-semibold text-xl'>Thông tin mua hàng</div>
        <input type="text" placeholder='Họ và tên' required
          className='border px-3 py-2'
          value={fullname}
          onChange={e => setFullName(e.target.value)}
        />
        <input type="email" placeholder='Email' required
          className='border px-3 py-2'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input type="text" placeholder='Số điện thoại' required
          className='border px-3 py-2'
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

        <AddressSelect />
        <input type="text" placeholder='Địa chỉ' required
          className='border px-3 py-2'
        />
        <input type="text" placeholder='Ghi chú'
          className='border px-3 py-2'
        />

      </div>
      <div className='flex-1'>
        <div className='text-xl font-semibold mb-4'>Phương thức thanh toán</div>
        {message && (
          <div className='text-red-600 mb-4 text-sm'>{message} </div>
        )}
        <div className='flex flex-col border divide-y'>
          <label className='flex gap-2 p-3 cursor-pointer'>
            <input type="radio" className='accent-black'
            value='bank'
            checked={method === 'bank'}
            onChange={() => {
              setMethod('bank');
              setMessage('')
            }
            }
            />
            Thanh toán ngân hàng
          </label>
          {method === 'bank' && (
            <BankQrCode/>
          )}
          <label className='flex gap-2 p-3 cursor-pointer'>
            <input type="radio" className='accent-black'
              value='cod'
              checked={method === 'cod'}
              onChange={() => {
                setMethod('cod');
                setMessage('');
              }}
            />
            Thanh toán khi giao hàng
          </label>

        </div>

      </div>
      <div className='flex-1'>
        <CartTotal/>
        <button type='submit' className='w-full p-2 mt-6 bg-black text-white border border-black hover:bg-white hover:text-black'>
          ĐẶT HÀNG
        </button>

      </div>
      
    </form>
  )
}

export default PlaceOrder
