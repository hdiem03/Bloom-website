
import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';

const Login = () => {
  const [currentState, setCurrentState] = useState('ĐĂNG NHẬP');
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const {navigate} = useContext(ShopContext);

  const handleSubmit = e => {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem('users')) || [];

  if (currentState === 'ĐĂNG KÝ') {
    if (users.some(u => u.email === email)) {
      alert('Email đã có người sử dụng');
      return;
    }

    users.push({ fullname, email, phone, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Đăng ký thành công!');
    setCurrentState('ĐĂNG NHẬP');
    return;
  }

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(user));
    navigate('/');
  } else {
    alert('Thông tin đăng nhập không chính xác.');
  }
};

  
  return (
    <div className='flex items-center justify-center mt-14'>
      <form onSubmit={handleSubmit} className='max-w-lg space-y-4'>
        <h2 className='text-2xl font-semibold text-center'>{currentState} </h2>
        {currentState === 'ĐĂNG KÝ' && (
          <input 
            onChange={e => setFullName(e.target.value)}
            type="text" 
            placeholder='Họ và tên' 
            value={fullname} required 
            className='w-full px-3 py-2 border'/>
          
        )}
        <input
          onChange={e => setEmail(e.target.value)} 
          type="email" 
          placeholder='Email' 
          value={email} required
          pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
          title='Email không hợp lệ'
          className='w-full px-3 py-2 border' />
        {currentState === 'ĐĂNG KÝ' && (
          <input 
            onChange={e => setPhone(e.target.value)}
            type="text" 
            placeholder='Số điện thoại' 
            value={phone} required 
            pattern='0\d{9}'
            title='Số điện thoại không hợp lệ'
            className='w-full px-3 py-2 border' />
        )}
        <input 
          onChange={e => setPassword(e.target.value)}
          type="password" 
          placeholder='Mật khẩu' 
          value={password} required 
          minLength={8}
          onInvalid={e => {
            e.preventDefault(); 
            alert('Mật khẩu phải có ít nhất 8 ký tự');
            }}          
          className='w-full px-3 py-2 border' />
        <button className='w-full py-2 bg-black text-white border border-black hover:text-black hover:bg-white'>
          {currentState === 'ĐĂNG NHẬP' ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}
        </button>
        {currentState === 'ĐĂNG NHẬP' ? (
          <div className='flex justify-between text-sm'>
            <p className='cursor-pointer'>Quên mật khẩu</p>
            <p onClick={() => setCurrentState('ĐĂNG KÝ')} className='cursor-pointer'>
              Đăng ký tại đây
            </p>

          </div>

        ): (
          <div className='text-center text-sm'>
            <p>Bạn có tài khoản?
              <span onClick={()=> setCurrentState('ĐĂNG NHẬP')}
                className='ml-2 cursor-pointer'
                >Đăng nhập</span>
            </p>

          </div>
        )}
      </form>
      
    </div>
  )
}

export default Login
