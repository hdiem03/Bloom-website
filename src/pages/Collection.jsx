import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem';
import { getProductPrice } from '../utils/utils';

const Collection = () => {
  const {products,search} = useContext(ShopContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSize, setSelectedSize] =useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [sort,setSort] = useState('relevant');
  const normalizeVn = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D');

  const toggleCategory = e =>{
    if (selectedCategory.includes(e.target.value)) {
      setSelectedCategory(prev => prev.filter(item => item !== e.target.value))
      
    }else{
      setSelectedCategory(prev => [...prev,e.target.value])
    }
  }
  const toggleSize = e =>{
    if (selectedSize.includes(e.target.value)) {
      setSelectedSize(prev => prev.filter(item => item !== e.target.value))
      
    }else{
      setSelectedSize(prev => [...prev,e.target.value])
    }
  }
  const toggleColor = e =>{
    if (selectedColor.includes(e.target.value)) {
      setSelectedColor(prev => prev.filter(item => item !== e.target.value))
      
    }else{
      setSelectedColor(prev => [...prev,e.target.value])
    }
  }
  const togglePrice = e =>{
    if (selectedPrice.includes(e.target.value)) {
      setSelectedPrice(prev => prev.filter(item => item !== e.target.value))
      
    }else{
      setSelectedPrice(prev => [...prev,e.target.value])
    }
  }
  
  const applyFilter = () =>{
    let productsCopy = [...products];
    if (selectedCategory.length>0) {
      productsCopy = productsCopy.filter(item => selectedCategory.includes(item.category))
      
    }
    if (selectedSize.length>0) {
      productsCopy = productsCopy.filter(item => item.size.some(s => selectedSize.includes(s.name)))
      
    }
    if (selectedColor.length>0) {
      productsCopy = productsCopy.filter(item => item.color.some(c => selectedColor.includes(c.name)))
      
    }
    if (selectedPrice.length>0) {
      productsCopy = productsCopy.filter(item => {
        const {productPrice} = getProductPrice(item.price,item.bestSeller);
        return selectedPrice.some(range =>(
          (range === 'under-500' && productPrice < 500000) ||
          (range === '500-1000' && productPrice >=500000 && productPrice <=1000000) ||
          (range === 'above-1000' && productPrice >1000000)
        ))
      })
      
    }
    // const productPrice = (item) => getProductPrice(item.price, item.bestSeller).productPrice;
    if (sort === 'low-high') {
      productsCopy.sort((a,b) => getProductPrice(a.price,a.bestSeller).productPrice - getProductPrice(b.price,b.bestSeller).productPrice)
      
    }else if (sort === 'high-low') {
      productsCopy.sort((a,b) => getProductPrice(b.price,b.bestSeller).productPrice - getProductPrice(a.price,a.bestSeller).productPrice)
      
    }
    if (search) {
      productsCopy = productsCopy.filter(item => normalizeVn(item.name.toLowerCase()).includes(normalizeVn(search.toLowerCase())))
      
    }

    setFilterProduct(productsCopy);
  }


  useEffect(()=>{
    applyFilter();

  },[selectedCategory,selectedSize,selectedColor,selectedPrice,sort,search])
  return (
    <div className='flex gap-10 pt-10'>
      {/* filter */}
      <div className='pt-10 hidden lg:block w-[230px]'>
        <div className='flex justify-between'>
          <p className='mb-4 font-semibold'>LỌC SẢN PHẨM</p>
          {(selectedCategory.length > 0 || selectedSize.length > 0 || selectedColor.length > 0 || selectedPrice.length > 0) && (
            <button
              onClick={() => window.location.reload()}
              className='text-sm mb-4 underline'
            >
              Xóa bộ lọc
            </button>
          )}
        </div>

        <p>Danh mục sản phẩm</p>
        <div className='flex flex-col gap-2 text-sm py-3'>
          <label>
            <input type="checkbox" value={'Áo'} className='w-4 h-4 mr-3'  onChange={toggleCategory}/>Áo
          </label>
          <label>
            <input type="checkbox" value={'Đầm'} className='w-4 h-4 mr-3' onChange={toggleCategory} />Đầm
          </label>
          <label>
            <input type="checkbox" value={'Quần'} className='w-4 h-4 mr-3' onChange={toggleCategory} />Quần
          </label>          
        </div>
        <hr className='border my-3'/>
        <p>Size</p>
        <div className='flex flex-col gap-2 text-sm py-3'>
          <label>
            <input type="checkbox" value={'S'} className='w-4 h-4 mr-3' onChange={toggleSize} />S
          </label>
          <label>
            <input type="checkbox" value={'M'} className='w-4 h-4 mr-3' onChange={toggleSize} />M
          </label>
          <label>
            <input type="checkbox" value={'L'} className='w-4 h-4 mr-3' onChange={toggleSize} />L
          </label>    
          <label>
            <input type="checkbox" value={'XL'} className='w-4 h-4 mr-3' onChange={toggleSize} />XL
          </label>  
        </div>
        <hr className='border my-3'/>
        <p>Màu sắc</p>
        <div className='flex flex-col gap-2 text-sm py-3'>
          <label>
            <input type="checkbox" value={'Trắng'} className='w-4 h-4 mr-3' onChange={toggleColor} />Trắng
          </label>
          <label>
            <input type="checkbox" value={'Đen'} className='w-4 h-4 mr-3' onChange={toggleColor} />Đen
          </label>
          <label>
            <input type="checkbox" value={'Hồng'} className='w-4 h-4 mr-3' onChange={toggleColor} />Hồng
          </label>    
          <label>
            <input type="checkbox" value={'Cam'} className='w-4 h-4 mr-3' onChange={toggleColor} />Cam
          </label>  
          <label>
            <input type="checkbox" value={'Xanh'} className='w-4 h-4 mr-3'  onChange={toggleColor}/>Xanh
          </label>
          <label>
            <input type="checkbox" value={'Nâu'} className='w-4 h-4 mr-3'  onChange={toggleColor}/>Nâu
          </label>    
          <label>
            <input type="checkbox" value={'Ghi'} className='w-4 h-4 mr-3'  onChange={toggleColor}/>Ghi
          </label> 
        </div>
        <hr className='border my-3'/>
        <p>Giá</p>
        <div className='flex flex-col gap-2 text-sm py-3'>
          <label>
            <input type="checkbox" value={'under-500'} className='w-4 h-4 mr-3' onChange={togglePrice} />Dưới 500.000đ
          </label>
          <label>
            <input type="checkbox" value={'500-1000'} className='w-4 h-4 mr-3' onChange={togglePrice} />500.000đ - 1.000.000đ
          </label>
          <label>
            <input type="checkbox" value={'above-1000'} className='w-4 h-4 mr-3' onChange={togglePrice} />Trên 1.000.000đ
          </label>          
        </div>
        <hr className='border my-3'/>
      </div>
      {/* right */}
      <div className='flex-1'>
        <div className='flex justify-between'>
          <p className='text-sm lg:text-xl font-semibold'>TẤT CẢ SẢN PHẨM</p>
          <div className='flex items-center gap-3'>
            <p className='text-sm'>Sắp xếp theo</p>
            <select onClick={e=>setSort(e.target.value)} className='border border-gray-500 p-2 w-48 text-sm'>
            <option value="relevant">Mặc định</option>
            <option value="low-high">Giá: thấp đến cao</option>
            <option value="high-low">Giá: cao đến thấp</option>
          </select>
          </div>

        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6'>
          {filterProduct.map(item =>(
            <ProductItem key={item.id} id={item.id} name={item.name} color={item.color} bestSeller={item.bestSeller} price={item.price} />
          ))}

        </div>

      </div>

      
    </div>
  )
}

export default Collection