import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { getProductPrice } from '../utils/utils';
import Quantity from '../components/Quantity';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const {productId} = useParams();
  const {products,currency,addToCart,navigate} = useContext(ShopContext);
  const product = products.find(item => item.id === productId);
  if (!product) return <div>Sản phẩm không tồn tại.</div>
  const [selectedColor, setSelectedColor] = useState(product.color[0]);

  const [selectedSize, setSelectedSize] = useState(() => product.size.find(s => s.quantity > 0) || null);

  const [imageByColor, setImageByColor] = useState(product.color[0].image[0]);
  const [quantity, setQuantity] = useState(1);
  const {productPrice, isDiscounted} = getProductPrice(product.price,product.bestSeller);

  useEffect(()=>{
    if (product) {
      setSelectedColor(product.color[0]);
      setSelectedSize(product.size.find(s => s.quantity > 0) || null);

      setImageByColor(product.color[0].image[0]);
      setQuantity(1);
      
    }
    window.scrollTo(0,0);

  },[product])
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-20 pt-10'>
        {/* image */}
        <div className='flex-1 flex flex-col-reverse lg:flex-row gap-3'>
          <div className='flex lg:flex-col lg:w-[19%] gap-2 lg:gap-3'>
            {selectedColor.image.map(i => (
              <img onClick={()=>setImageByColor(i)} src={i} key={i} className='w-[24%] lg:w-full cursor-pointer' />
            ))}

          </div>
          <div className='lg:w-[80%]'>
            <div
              className='relative w-full overflow-hidden'
              onMouseMove={e => {
                const rect = e.currentTarget.getBoundingClientRect();
                const img = e.currentTarget.querySelector('img');
                const x = ((e.clientX - rect.left)/rect.width) * 100;
                const y = ((e.clientY - rect.top)/ rect.height) * 100;
                img.style.transformOrigin=`${x}% ${y}%`
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector('img').style.transformOrigin ='center center'
              }}
            >
              <img src={imageByColor} className='transition-transform object-contain hover:scale-150' />
            </div>

          </div>

        </div>
        {/* info */}
        <div className='flex-1'>
          <p className='font-semibold text-sm lg:text-3xl'>{product.name} </p>
          <div className='flex items-center my-4'>
            <p className='text-gray-500 mr-6'>SKU: {product.sku} </p>
            <img src={assets.star_icon} className='w-4' />
            <img src={assets.star_icon} className='w-4' />
            <img src={assets.star_icon} className='w-4' />
            <img src={assets.star_icon} className='w-4' />
            <img src={assets.star_icon} className='w-4' />
            <p className='ml-3'>(0 đánh giá)</p>

          </div>
          <div className='flex items-end gap-5 my-6'>
            <p className='text-xl font-semibold'>{productPrice.toLocaleString('vi-VN')}{currency} </p>
            {isDiscounted && (
              <>
                <p className='line-through text-gray-400'>{product.price.toLocaleString('vi-VN')}{currency} </p>
                <span className='bg-orange-600 text-white text-xs font-bold px-4 py-1 mb-3'>
                  -50%
                </span>
              </>              
            )}
          </div>
          <p>Màu sắc: {selectedColor.name} </p>
          <div className='flex gap-4 my-4'>
            {product.color.map(c => (
              <button
                onClick={()=>{
                  setSelectedColor(c);
                  setImageByColor(c.image[0])}}
                key={c.name}
                className={`w-6 h-6 rounded-full border ${selectedColor.name === c.name ? 'outline outline-1 outline-offset-2' : ''}`}
                style={{backgroundColor: c.code}}
              >

              </button>
            ))}

          </div>
          <div className='flex items-center gap-5 my-8'>
            <p>Size</p>
            {product.size.map(s => (
              <button
                onClick={()=> setSelectedSize(s)}
                key={s.name}
                disabled={s.quantity === 0}
                className={`relative border h-8 w-12
                  ${selectedSize && selectedSize.name === s.name ? 'border-black text-black': 'text-gray-500'}`}
              >
                {s.name}
                {s.quantity === 0 &&(
                  <div className='absolute top-1/2 left-0 w-full h-[1px] bg-gray-400 -rotate-45'></div>
                )}
              </button>
            ))}

          </div>
          <div className='flex items-center gap-5'>
            <p>Số lượng</p>
            <Quantity qty={quantity} setQty={(newQty => {
              if (newQty <= selectedSize.quantity) {
                setQuantity(newQty);
                
              }
            })} />

          </div>
          {!selectedSize ? (
            <button 
              disabled
              className='my-8 w-48 h-14 px-8 bg-gray-300 text-white'>
              HẾT HÀNG
            </button>

          ) :(
            <div className='flex gap-4 my-8'>
              <button 
                onClick={()=>addToCart(product.id,selectedSize.name,selectedColor.name,quantity)}
                className='w-48 h-14 px-8 bg-black text-white border border-black hover:bg-white hover:text-black'>
                THÊM VÀO GIỎ
              </button>
              <button 
                onClick={()=> {addToCart(product.id,selectedSize.name,selectedColor.name,quantity), navigate('/checkout')}}
              className='w-48 h-14 px-8 bg-white text-black border border-black hover:bg-black hover:text-white'>
                MUA HÀNG
              </button>

            </div>
          )}
          <hr className='mt-8'/>
          <p className='font-semibold py-6'>CHI TIẾT SẢN PHẨM</p>
          <p className='text-justify text-sm'>{product.description} </p>

        </div>

      </div>
      <RelatedProduct category={product.category} excludeId={product.id}/>
      
    </>
  )
}

export default Product
