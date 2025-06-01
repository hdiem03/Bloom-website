import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='border-t border-gray-300 mt-40'>
        <div className='px-6 sm:px-20'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm py-10'>
                <div>
                    <img className='mb-4 w-32' src={assets.Logo} />
                    <p className='text-gray-600 md:w-2/3'>
                        Không chỉ là thời trang, BLOOM còn là “phòng thí nghiệm” của tuổi trẻ - nơi nghiên cứu và cho
                        ra đời nguồn năng lượng mang tên “Youth”. Chúng mình luôn muốn tạo nên những trải nghiệm vui
                        vẻ, năng động và trẻ trung.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Về chúng tôi</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Trang chủ</li>
                        <li>Tất cả sản phẩm</li>
                        <li>Giao hàng</li>
                        <li>Chính sách bảo mật</li>

                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Liên hệ</p>
                    <div className='flex'>
                        <a href="https://facebook.com" target='_blank' className='text-2xl mr-4'>
                            <FaFacebook />
                        </a>
                        <a href="https://facebook.com" target='_blank' className='text-2xl mr-4'>
                            <FaInstagram />
                        </a>
                        <a href="https://facebook.com" target='_blank' className='text-2xl mr-4'>
                            <FaTiktok />
                        </a>

                    </div>
                </div>
               
            </div>
            <hr />
            <p className='py-5 text-sm text-center'>@ Bản quyền thuộc về BLOOM</p>


        </div>
        
      
    </div>
  )
}

export default Footer
