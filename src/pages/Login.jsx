import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';

const Login = () => {
  const [currentState, setCurrentState] = useState('ĐĂNG NHẬP');
  const [fullname,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const {navigate} = useContext(ShopContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (currentState === 'ĐĂNG KÝ') {
      if (users.some(u => u.email === email)) {
        alert('Email đã có người sử dụng');
        return;
        
      }

      users.push({fullname,email,phone,password});
      localStorage.setItem('users',JSON.stringify(users));
      alert('Đăng ký thành công!');
      setCurrentState('ĐĂNG NHẬP');
      return;
      
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/');
      
    }else{
      alert('Thông tin đăng nhập không chính xác.');
    }

  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col mx-auto mt-14 max-w-lg w-full space-y-4'>
      <div className='text-2xl font-semibold text-center'>{currentState} </div>
      {currentState === 'ĐĂNG KÝ' && (
        <input type="text" 
          placeholder='Họ và tên'
          className='px-3 py-2 border'
          value={fullname} required
          onChange={e => setFullName(e.target.value) }
        />
      )}
      <input type="email"
        placeholder='Email'
        className='px-3 py-2 border'
        pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      {currentState === 'ĐĂNG KÝ' && (
        <input type="text" 
          placeholder='Số điện thoại'
          className='px-3 py-2 border'
          pattern='0\d{9}'
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      )}
      <input type="password"
        placeholder='Mật khẩu'
        className='px-3 py-2 border'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className='py-2 bg-black text-white border border-black hover:bg-white hover:text-black'>
        {currentState === 'ĐĂNG NHẬP' ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}
      </button>
      {currentState === 'ĐĂNG NHẬP' ? (
        <div className='flex justify-between text-sm'>
          <p className='cursor-pointer'>Quên mật khẩu</p>
          <p onClick={() => setCurrentState('ĐĂNG KÝ')} className='cursor-pointer'>Đăng ký tại đây</p>
        </div>

      ) : (
        <div className='text-center text-sm'>
          <p>Bạn có tài khoản?
            <span
              onClick={() => setCurrentState('ĐĂNG NHẬP')}
              className='ml-2 cursor-pointer'
            >
              Đăng nhập
            </span>
          </p>

        </div>
      )}
    </form>   
  )
}

export default Login
