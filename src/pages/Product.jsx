import React, { useContext, useEffect, useState }  from 'react'
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Quantity from '../components/Quantity';

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart,navigate} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const fetchProductData = () =>{
    const product = products.find(item => item.id === productId)
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      setSize(product.size[0]);
      setQuantity(1);   
      
    }
  }
  useEffect(()=>{
    fetchProductData();
    window.scrollTo(0, 0);

  },[productId, products])
  return productData ? (
    <div>
      <div className='flex flex-col md:flex-row gap-20 pt-10'>
        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 md:flex-row'>
            <div className='flex md:flex-col  md:w-[19%] gap-2 md:gap-3'>
        
            {
              productData.image.map(item=>(
                <img onClick={()=>setImage(item)} src={item} key={item} className='w-[24%] md:w-full cursor-pointer'/>
              ))
            }

          </div>
          <div className='md:w-[80%]'>
            <img className='' src={image} />
         
          </div>

        </div>

        {/* product info */}
        <div className='flex-1'>
          <h1 className='text-3xl font-semibold'>{productData.name}</h1>
          <div className='flex items-center gap-4 my-4'>
            <p className='text-gray-500'>SKU: {productData.sku} </p>
            <div className='flex items-center gap-1'>
              <img src={assets.star_icon} className='w-3' />
              <img src={assets.star_icon} className='w-3' />
              <img src={assets.star_icon} className='w-3' />
              <img src={assets.star_icon} className='w-3' />
              <img src={assets.star_icon} className='w-3' />
              <p className='pl-2'>(0 đánh giá)</p>
            </div>
          </div>
          <p className='mt-5 text-xl font-semibold'>
            {productData.price.toLocaleString('vi-VN')}{currency}
          </p>
          <p className='mt-5'>Màu sắc: {productData.color} </p>
          <div className='flex items-center gap-4 my-8'>
            <p className='mr-8'>Size</p>
            <div className='flex gap-4'>
              {
                productData.size.map(item => (
                  <button
                  onClick={()=>setSize(item)}
                    key={item} className={`border py-1 px-4 ${item === size ? 'border-black text-black' : 'text-gray-500'}`}
                  >
                    {item}
                  </button>
                ))
              }

            </div>

          </div>
          <div className='flex items-center gap-4 my-8'>
            <p>Số lượng</p>
            <Quantity
              qty={quantity}
              setQty={setQuantity}
            />
            
          </div>
          <div className='flex gap-4'>
            <button onClick={()=>addToCart(productData.id, size,quantity)} className='w-48 h-14 px-8 bg-black text-white border border-black hover:bg-white hover:text-black'>
              THÊM VÀO GIỎ
            </button>
            <button onClick={()=>{addToCart(productData.id, size, quantity); navigate('/place-order')}}  className='w-48 h-14 text-black border border-black hover:bg-black hover:text-white'>
              MUA HÀNG
            </button>
          

          </div>
          <hr className='my-8'/>
          <div>
            <div className='flex border-b '>
              <button className='flex-1 py-2 text-sm font-semibold text-black border-b-2 border-black'>
                Giới thiệu
              </button>
              <button className='flex-1 py-2 text-sm font-semibold text-gray-500'>
                Chi tiết sản phẩm
              </button>

            </div>
            <div className='py-6 text-sm '>
              <p className='text-justify'>{productData.description} </p>
              <p></p>
              
            </div>


          </div>

        </div>
        
        
      </div>
      {/* Related product */}
      {/* <RelatedProduct category={productData.category} excludeId={productData.id} /> */}
      <RelatedProduct category={productData.category} />
    </div>
    
  ) : <div className='opacity-0'></div>
  

}

export default Product
