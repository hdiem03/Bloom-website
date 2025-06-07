import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'
import { ShopContext } from '../context/ShopContext'
import CartSideBar from './CartSideBar'
const Navbar = () => {
    const {search, setSearch, getCartCount, showCartSidebar, setShowCartSidebar} = useContext(ShopContext);
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    return (
        <div className='fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between h-20 px-6 sm:px-20 shadow-sm'>
            <NavLink to='/collection'className={({isActive}) => `text-xs lg:text-sm font-semibold pb-2 border-b-2 ${isActive ? 'border-black' : 'border-transparent hover:border-black'}`}>
                TẤT CẢ SẢN PHẨM
             </NavLink>
            <Link to='/' onClick={() => window.scrollTo(0, 0)}>
            <img src={assets.Logo} className='h-6 md:h-7 lg:h-10' />
            </Link>
            <div className='flex items-center gap-4'>
                <div className='hidden sm:flex w-40 lg:w-64 border border-gray-300 rounded px-3 py-2'>
                    <MagnifyingGlassIcon className='w-5 h-5 text-gray-500 cursor-pointer mr-2'/>
                    <input 
                        value={search}
                        onChange={e=>setSearch(e.target.value)}
                        type="text"
                        className='text-xs lg:text-sm outline-none'

                        placeholder='TÌM KIẾM SẢN PHẨM'/>

                </div>
                <div className="relative group h-20 flex items-center cursor-pointer px-2">

                    {isLoggedIn ? (
                    <>
                        <UserIcon className='w-5 h-5 cursor-default' />
                        <div className='hidden group-hover:block absolute top-full right-0 w-48 p-4 bg-white border z-20'>
                            <p className='cursor-pointer  hover:font-semibold mb-2'>Tài khoản</p>
                            <Link to='/order' className='cursor-pointer hover:font-semibold'>Đơn hàng của tôi</Link>
                            <p
                            className='cursor-pointer hover:font-semibold mt-2'
                            onClick={() => {
                                localStorage.removeItem('isLoggedIn')
                                window.location.reload()
                            }}
                            >
                            Đăng xuất
                            </p>
                        </div>
                        </>
                    ) : (
                        <Link to='/login'>
                        <UserIcon className='w-5 h-5' />
                        </Link>
                    )}
                </div>
                <Link onClick={()=>setShowCartSidebar(true)} className='relative'>
                    <ShoppingBagIcon className='w-5 h-5'/>
                    <p className='absolute -top-3 -right-3 w-4 h-4 text-center bg-black text-white rounded-full text-[10px]'>{getCartCount()}</p>
                </Link>

                <Bars3Icon className='cursor-pointer sm:hidden w-5 h-5'/>



            </div>
            {showCartSidebar && <CartSideBar />}

        
        </div>
    )
}

export default Navbar