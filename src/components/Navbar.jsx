import React, { useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'
import { ShopContext } from '../context/ShopContext'
import CartSideBar from './CartSideBar'
const Navbar = () => {
    const {search, setSearch, getCartCount, showCartSidebar, setShowCartSidebar} = useContext(ShopContext);
    const isLoggedIn = !!localStorage.getItem('currentUser');
    return (
        <div className='fixed left-0 right-0 z-50 bg-white shadow-sm'>
            <div className='grid grid-cols-3 items-center h-20 px-4 lg:px-20'>
                <div>
                    <Bars3Icon className='cursor-pointer lg:hidden w-5 h-5'/>
                    <NavLink to='/collection' className={({isActive}) =>
                        `hidden lg:inline-block text-sm font-semibold pb-2 border-b-2 mr-3 ${isActive ? 'border-black' : 'border-transparent hover:border-black'}`
                    }>
                        TẤT CẢ SẢN PHẨM
                    </NavLink>

                </div>

                <div className='flex justify-center'>
                    <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                        <img src={assets.Logo} alt='' className='h-7 lg:h-10' />
                    </Link>
                </div>
                <div className='flex items-center justify-end gap-6'>
                    <div className='hidden lg:flex w-60 border border-gray-300 rounded px-3 py-2'>
                        <MagnifyingGlassIcon className='w-5 h-5 text-gray-500 cursor-pointer mr-2'/>
                        <input 
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type="text"
                        className='text-xs lg:text-sm outline-none'
                        placeholder='TÌM KIẾM SẢN PHẨM'
                        />
                    </div>

                    <div className="relative group h-20 flex items-center cursor-pointer">
                        {isLoggedIn ? (
                        <>
                            <UserIcon className='w-5 h-5' />
                            <div className='hidden group-hover:block absolute top-full right-0 w-48 p-4 bg-white border'>
                            <Link to='/orders' className='hover:font-semibold'>Đơn hàng của tôi</Link>
                            <p
                                className='hover:font-semibold mt-2'
                                onClick={() => {
                                localStorage.removeItem('currentUser');
                                window.location.reload();
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

                    <button onClick={() => setShowCartSidebar(true)} className='relative'>
                        <ShoppingBagIcon className='w-5 h-5'/>
                        <p className='absolute -top-3 -right-3 w-4 h-4 text-center bg-black text-white rounded-full text-[10px]'>{getCartCount()}</p>
                    </button>

                </div>
            </div>
            {showCartSidebar && <CartSideBar />}
        </div>
    )
}

export default Navbar

