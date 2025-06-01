import React, { useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
const Collection = () => {
  const {products, search} = useContext(ShopContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [price, setPrice] = useState([]);
  const [sortType, setSortType] = useState('relevant')


  const toggleCategory = (e) =>{
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item!== e.target.value))
      
    }else{
      setCategory(prev => [...prev,e.target.value])
    }
  }
  const toggleSize = (e) =>{
    if (size.includes(e.target.value)) {
      setSize(prev => prev.filter(item => item!== e.target.value))
      
    }else{
      setSize(prev => [...prev,e.target.value])
    }
  }
  const toggleColor = (e) =>{
    if (color.includes(e.target.value)) {
      setColor(prev => prev.filter(item => item!== e.target.value))
      
    }else{
      setColor(prev => [...prev,e.target.value])
    }
  }
  const togglePrice = (e) =>{
    if (price.includes(e.target.value)) {
      setPrice(prev => prev.filter(item => item!== e.target.value))
      
    }else{
      setPrice(prev => [...prev,e.target.value])
    }
  }
  const applyFilter = () =>{
    let productsCopy = [...products];
    if (category.length>0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
      
    }
    if (size.length >0) {
      productsCopy = productsCopy.filter(item => item.size.some(s => size.includes(s)))
      
    }
    if (color.length >0) {
      productsCopy = productsCopy.filter(item => item.color.some(c => color.includes(c)))
      
    }
    if (price.length >0) {
      productsCopy = productsCopy.filter(item => price.some(range =>(
        (range === 'under-500' && item.price <500000) ||
        (range === '500-1000' && item.price >=500000 && item.price <=1000000) ||
        (range === 'above-1000' && item.price >1000000) 
      )))
      
    }
    if (search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    }
    if (sortType === 'low-high') {
      productsCopy.sort((a,b) => a.price - b.price);
    } else if (sortType === 'high-low') {
      productsCopy.sort((a,b) => b.price - a.price);
    }
    setFilterProduct(productsCopy)

  }


  useEffect(()=>{
    applyFilter();

  },[category,size,color,price,search, sortType])

  return (
    <div>
      <div className='flex flex-col sm:flex-row md:gap-10 pt-10'>
        {/* Filter option */}
          <div className='py-10 hidden md:block'>
            {/* category filter */}
            <p>Danh mục sản phẩm</p>
            <div className='flex flex-col gap-2 py-3 text-sm'>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'Áo'} onChange={toggleCategory}/>Áo
              </label>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'Đầm'} onChange={toggleCategory}/>Đầm
              </label>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'Quần'} onChange={toggleCategory}/>Quần
              </label>
            </div>
            <hr className='border my-3'/>
            <p>Size</p>
            <div className='flex flex-col gap-2 py-3 text-sm'>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'S'} onChange={toggleSize}/>S
              </label>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'M'} onChange={toggleSize}/>M
              </label>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'L'} onChange={toggleSize}/>L
              </label>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'XL'} onChange={toggleSize}/>XL
              </label>

            </div>
            <hr className='border my-3'/>

            {/* color filter */}
            <p>Màu sắc</p>
            <div className='flex flex-col gap-2 py-3 text-sm'>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'Trắng'} onChange={toggleColor}/>Trắng
              </label>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'Hồng'} onChange={toggleColor}/>Hồng
              </label>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'Đen'} onChange={toggleColor}/>Đen
              </label>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'Cam'} onChange={toggleColor}/>Cam
              </label>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'Xanh'} onChange={toggleColor}/>Xanh
              </label>

            </div>
            <hr className='border my-3'/>
            {/* price filter */}
            <p>Giá</p>
            <div className='flex flex-col gap-2 py-3 text-sm'>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'under-500'} onChange={togglePrice}/>Dưới 500.000đ
              </label>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'500-1000'} onChange={togglePrice}/>500.000 - 1.000.000đ
              </label>
              <label>
                <input className='w-4 h-4 mr-3' type="checkbox" value={'above-1000'} onChange={togglePrice}/>Trên 1.000.000đ
              </label>
            </div>
            <hr className='border my-3'/>
          </div>
   
        {/* Right side */}
        <div className='flex-1'>
          <div className='flex justify-between'>
            <h2 className='text-ms lg:text-2xl'>TẤT CẢ SẢN PHẨM</h2>
            {/* Product sort*/}
            <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm py-2 w-48'>
              <option value="relevant">Mặc định</option>
              <option value="low-high">Giá: thấp đến cao</option>
              <option value="high-low">Giá: cao đến thấp</option>
            </select>

          </div>
          {/* map product */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5'>
           {
            filterProduct.map(item =>(
              <ProductItem key={item.id} id={item.id} image={item.image} name={item.name} price={item.price}/>
            ))
           }

          </div>
          
        </div>

      </div>
      
    </div>
  )
}

export default Collection
