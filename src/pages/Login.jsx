import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Login = () => {
  const [currentState, setCurrentState] = useState('ĐĂNG NHẬP');
  const [fullname, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useContext(ShopContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentState === 'ĐĂNG KÝ') {
      localStorage.setItem('user',JSON.stringify({fullname,phone,email,password}));
      setCurrentState('ĐĂNG NHẬP');
      
    }else{
      const user = JSON.parse(localStorage.getItem('user')|| '{}')
      if (user.email === email && user.password === password) {
        localStorage.setItem('isLoggedIn','true');
        navigate('/');
        
      }else{
        alert('Thông tin đăng nhập không chính xác.')
      }
    }
  };

  return (
    <div className='flex items-center justify-center mt-14'>
      <form
        onSubmit={handleSubmit}
        className='max-w-lg space-y-4'
      >
        <h2 className='text-2xl font-semibold text-center'>{currentState}</h2>

        {currentState === 'ĐĂNG KÝ' && (
          <input
            type='text'
            value={fullname}
            onChange={e => setFullName(e.target.value)}
            placeholder='Họ và tên'
            required
            className='w-full px-3 py-2 border'
          />
        )}

        <input
          type='email'
          value={email}
          onChange={e=> setEmail(e.target.value)}
          placeholder='Email'
          required
          className='w-full px-3 py-2 border'
        />

        {currentState === 'ĐĂNG KÝ' && (
          <input
            type='text'
            value={phone}
            onChange={e=> setPhone(e.target.value)}
            placeholder='Số điện thoại'
            required
            className='w-full px-3 py-2 border'
          />
        )}

        <input
          type='password'
          value={password}
          onChange={e=>setPassword(e.target.value)}
          placeholder='Mật khẩu'
          required
          className='w-full px-3 py-2 border'
        />

        <button className='w-full py-2 bg-black text-white hover:bg-white hover:text-black border border-black transition'>
          {currentState === 'ĐĂNG NHẬP' ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}
        </button>

        {currentState === 'ĐĂNG NHẬP' ? (
          <div className='flex justify-between text-sm'>
            <p className='cursor-pointer'>
              Quên mật khẩu?
            </p>
            <p
              onClick={() => setCurrentState('ĐĂNG KÝ')}
              className='cursor-pointer'
            >
              Đăng ký tại đây
            </p>
          </div>
        ) : (
          <div className='text-center text-sm'>
            <p>
              Bạn đã có tài khoản?
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
    </div>
  );
};

export default Login;
